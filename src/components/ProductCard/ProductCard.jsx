export const ProductCard = ({ title, Description, Price }) => {
  return (
    <div style={{ border: "2px solid steelblue" }}>
      <h2> {title} </h2>
      <h3> {Description} </h3>
      <h3> {Price} </h3>
    </div>
  );
};
