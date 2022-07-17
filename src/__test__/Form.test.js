import App from "../App";
import { renderWithProviders } from "./test-utils";
import data from "../data.json";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";

const MockForm = () => {
  return <App />;
};

describe("Form", () => {
  it("should render form component", () => {
    renderWithProviders(<MockForm />, {
      preloadedState: { data },
    });
    // open adduser form
    userEvent.click(screen.getByText("users page"));
    // Now we're in /form/adduser
    expect(screen.getByText("اضافه کردن کاربر")).toBeVisible();

    const usernameInput = screen.getByRole("textbox", { name: "نام کاربر" });
    userEvent.click(usernameInput);
    userEvent.type(usernameInput, "some username");
    // Verify input has the value
    expect(screen.getByDisplayValue("some username")).toBeVisible();
  });
});
