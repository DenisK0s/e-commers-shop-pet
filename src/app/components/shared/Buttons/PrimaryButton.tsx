type PrimaryButtonProps = {
  buttonLabel: string;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ buttonLabel }) => {
  return (
    <button
      type="button"
      className="p-button-primary my-4 w-full text-white bg-neutral-dark rounded-md"
    >
      {buttonLabel}
    </button>
  );
};

export default PrimaryButton;
