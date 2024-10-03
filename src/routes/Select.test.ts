import { render, screen } from "@testing-library/svelte";
import "@testing-library/jest-dom/vitest";
import { describe, expect, test } from "vitest";

import Select from "./Select.svelte";
import { type SelectOption } from "$lib/selectOptions";

describe("Select component", () => {
  const options: SelectOption[] = [
    { value: 1, label: "one" },
    { value: 99, label: "ninetynine" },
  ];

  test("renders combobox with the name of the given label", () => {
    render(Select, { label: "some label", id: "id", options: options });

    const selectWidget = screen.getByRole("combobox", { name: "some label" });

    expect(selectWidget).toBeInTheDocument();
  });

  test("renders all passed options", () => {
    render(Select, { label: "some label", id: "id", options: options });

    const optionOne = screen.getByRole("option", { name: "one" });
    const optionTwo = screen.getByRole("option", { name: "ninetynine" });

    expect(optionOne).toBeInTheDocument();
    expect(optionTwo).toBeInTheDocument();
  });

  test("selects the first option by default", () => {
    render(Select, { label: "some label", id: "id", options: options });

    const optionOne = screen.getByRole("option", { name: "one" }) as HTMLOptionElement;

    expect(optionOne.selected).toBe(true);
  });

  test("shows groups if present", () => {
    const groupedOptions: SelectOption[] = [
      { value: 1, label: "apple", group: "fruit" },
      { value: 2, label: "banana", group: "fruit" },
      { value: 3, label: "carrot", group: "vegetables" },
    ];
    render(Select, { label: "fridge content", id: "id", options: groupedOptions });

    const fruitGroup = screen.getByRole("group", { name: "fruit" });
    const vegetableGroup = screen.getByRole("group", { name: "vegetables" });

    expect(fruitGroup).toBeInTheDocument();
    expect(vegetableGroup).toBeInTheDocument();
  });
});
