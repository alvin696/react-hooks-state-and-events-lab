import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import ShoppingList from "../components/ShoppingList";

const testData = [
{ id: 1, name: "Yogurt", category: "Dairy" },
{ id: 2, name: "Pomegranate", category: "Produce" },
{ id: 3, name: "Lettuce", category: "Produce" },
{ id: 4, name: "String Cheese", category: "Dairy" },
{ id: 5, name: "Cookies", category: "Dessert" },
];

test("displays all items when initially rendered", () => {
const { container } = render(<ShoppingList items={testData} />);
const itemsContainer = container.querySelector(".Items");
if (itemsContainer) {
expect(itemsContainer.children).toHaveLength(testData.length);
} else {
throw new Error("Could not find Items container");
}
});

test("displays only items that match the selected category", () => {
const { container } = render(<ShoppingList items={testData} />);

fireEvent.change(screen.getByRole("combobox"), {
target: { value: "Dairy" },
});

const itemsContainer = container.querySelector(".Items");
if (itemsContainer) {
expect(itemsContainer.children).toHaveLength(2);
} else {
throw new Error("Could not find Items container");
}

fireEvent.change(screen.getByRole("combobox"), {
target: { value: "Dessert" },
});

const updatedItemsContainer = container.querySelector(".Items");
if (updatedItemsContainer) {
expect(updatedItemsContainer.children).toHaveLength(1);
} else {
throw new Error("Could not find updated Items container");
}
});