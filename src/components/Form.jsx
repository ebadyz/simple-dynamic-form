import { useState } from "react";
import { Helmet } from "react-helmet";
import { useParams, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import InputField from "./InputField";

function Form() {
  const { path } = useParams();
  const dispatch = useDispatch();
  const JSON_DATA = useSelector((state) => state.data);
  const { message, setMessage } = useState();

  const formInfo = JSON_DATA.find((form) => form.path === path);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const body = Object.fromEntries(formData.entries());
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    await fetch(formInfo.createurl, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((res) => {
        setMessage("فرم با موفقیت ثبت شد");
        dispatch({ type: "UPDATE_FORM_DATA", payload: res });
      })
      .catch((error) => {
        if (error) {
          setMessage("مشکلی پیش آمده است");
          dispatch({ type: "UPDATE_FORM_DATA", payload: error });
        }
      });
    e.target.reset();
  };

  const formBuilder = (field, index) => {
    const { name, title, type, options } = field;
    switch (type) {
      case "text":
      case "pass":
      case "radio":
        return (
          <InputField
            key={index}
            label={title}
            type={type === "pass" ? "password" : type}
            name={name}
            options={options}
          />
        );
      default:
        return null;
    }
  };

  if (!formInfo) return <Navigate to="/404" replace />;
  else
    return (
      <>
        <Helmet>
          <title>{formInfo.titleform}</title>
        </Helmet>
        <div className="center">
          <form onSubmit={handleSubmit} className="card">
            <h3>{formInfo.titleform}</h3>
            <hr className="mx-2" />
            <div className="card-content">
              {formInfo.field?.map((field, index) => formBuilder(field, index))}
              <button type="submit" className="submit-btn mx-2">
                ارسال
              </button>
              {message && <div>{message}</div>}
            </div>
          </form>
        </div>
      </>
    );
}

export default Form;
