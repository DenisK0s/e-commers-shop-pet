type TextButtonProps = {
  buttonLabel: string;
};

const TextButton: React.FC<TextButtonProps> = ({ buttonLabel }) => {
  return (
    <button
      type="button"
      className="p-button-primary my-4 w-full text-white bg-neutral-dark rounded-md"
    >
      {buttonLabel}
    </button>
  );
};

export default TextButton;
