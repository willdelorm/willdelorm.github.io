/**
 * @vitest-environment jsdom
 */

import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import ContactForm from "../src/ui/ContactForm";

test("renders ContactForm successfully", () => {
  render(<ContactForm />);

  expect(screen.getByText("Name*")).toBeInTheDocument();
  expect(screen.getByText("Email*")).toBeInTheDocument();
  expect(screen.getByText("Message*")).toBeInTheDocument();
});

test("displays required error messages when fields are empty", async () => {
  render(<ContactForm />);

  fireEvent.click(screen.getByText("Send Message"));

  await waitFor(() => {
    expect(screen.getAllByText("Required").length).toBe(3);
  });
});

test("submits the form successfully", async () => {
  const mockFetch = vi.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          success: true,
          message: "Message sent successfully",
        }),
    })
  );
  global.fetch = mockFetch;

  render(<ContactForm />);

  fireEvent.change(screen.getByPlaceholderText("e.g. Jane Doe"), {
    target: { value: "John Doe" },
  });
  fireEvent.change(screen.getByPlaceholderText("e.g. jane.doe@gmail.com"), {
    target: { value: "john.doe@example.com" },
  });
  fireEvent.change(
    screen.getByPlaceholderText(
      "e.g. You're just the person I've been looking for!"
    ),
    { target: { value: "Hello!" } }
  );

  fireEvent.click(screen.getByText("Send Message"));

  await waitFor(() => {
    expect(screen.getByText("Success")).toBeInTheDocument();
    expect(screen.getByText("Message sent successfully")).toBeInTheDocument();
  });
});

test("displays error message on form submission failure", async () => {
  const mockFetch = vi.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({ success: false, message: "Submission failed" }),
    })
  );
  global.fetch = mockFetch;

  render(<ContactForm />);

  fireEvent.change(screen.getByPlaceholderText("e.g. Jane Doe"), {
    target: { value: "John Doe" },
  });
  fireEvent.change(screen.getByPlaceholderText("e.g. jane.doe@gmail.com"), {
    target: { value: "john.doe@example.com" },
  });
  fireEvent.change(
    screen.getByPlaceholderText(
      "e.g. You're just the person I've been looking for!"
    ),
    { target: { value: "Hello!" } }
  );

  fireEvent.click(screen.getByText("Send Message"));

  await waitFor(() => {
    expect(screen.getByText("Oops, Something went wrong!")).toBeInTheDocument();
    expect(screen.getByText("Submission failed")).toBeInTheDocument();
  });
});
