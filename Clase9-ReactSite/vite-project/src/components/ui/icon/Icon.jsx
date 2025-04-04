export const Icon = (props) => {
  const { icon, type, alt } = props;
  return (
    <>
      <img className={type} src={icon} alt={alt} />
    </>
  );
};
