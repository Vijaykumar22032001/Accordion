import "./App.css";
import Accordion from "./components/Accordion";

const accordionData = [
  {
    id: 1,
    title: "What is React?",
    content:
      "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of their applications efficiently.",
  },
  {
    id: 2,
    title: "What is Tailwind CSS?",
    content:
      "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs without writing custom CSS.",
  },
  {
    id: 3,
    title: "What is Vite?",
    content:
      "Vite is a modern build tool that provides a faster and leaner development experience for modern web projects. It leverages native ES modules and offers instant hot module replacement.",
  },
  {
    id: 4,
    title: "How does an Accordion work?",
    content:
      "An accordion is a UI component that allows users to expand and collapse content sections. It's useful for organizing content in a compact, scannable way.",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Accordion Component
        </h1>
        <Accordion items={accordionData} allowMultiple={false} />
      </div>
    </div>
  );
}

export default App;
