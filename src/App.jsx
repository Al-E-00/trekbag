import { useState } from "react";
import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";
import { initialItems } from "./lib/constants";

function App() {
  const [items, setItems] = useState(initialItems);

  const handleAddItem = (itemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: itemText,
      packed: false,
    };

    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleMarkAllAsComplete = () => {
    setItems((prevItems) =>
      prevItems.map((item) => ({ ...item, packed: true }))
    );
  };

  const handleMarkAllAsIncomplete = () => {
    setItems((prevItems) =>
      prevItems.map((item) => ({ ...item, packed: false }))
    );
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const handleResetToInitial = () => {
    setItems(initialItems);
  };

  const secondaryButtonActions = [
    {
      buttonText: "Mark all as complete",
      onClick: handleMarkAllAsComplete,
    },
    {
      buttonText: "Mark all as incomplete",
      onClick: handleMarkAllAsIncomplete,
    },
    {
      buttonText: "Remove all items",
      onClick: handleRemoveAllItems,
    },
    {
      buttonText: "Reset to initial",
      onClick: handleResetToInitial,
    },
  ];

  return (
    <>
      <BackgroundHeading />

      <main>
        <Header />
        <ItemList items={items} setItems={setItems} />
        <Sidebar
          handleAddItem={handleAddItem}
          secondaryButtonActions={secondaryButtonActions}
        />
      </main>

      <Footer />
    </>
  );
}

export default App;
