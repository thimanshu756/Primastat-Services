// If using TypeScript, define an interface for props
interface ComponentProps {
  backgroundColor: string;
  text: string;
}

// Functional component that takes backgroundColor and text as props
const MyComponent: React.FC<ComponentProps> = ({ backgroundColor, text }) => {
  return (
    <div
      className={`relative ${backgroundColor} px-4 py-4 md:px-[7vw] text-black font-bold`}
    >
      <p>{text}</p>
    </div>
  );
};

export default MyComponent;
