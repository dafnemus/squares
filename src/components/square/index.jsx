import PropTypes from "prop-types";
import "./styles.css";

const Square = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <p>{className}</p>
    </div>
  );
};

Square.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Square.defaultProps = {
  className: "",
  onClick: () => {},
};
export default Square;
