function ImageController({ position, children, onClick }) {
  return (
    <button
      className={`absolute ${position}  p-2 rounded-full `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ImageController;
