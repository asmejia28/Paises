import PropTypes from "prop-types";

export const Header = ({ title, description }) => {
  return (
    <>
      <header className="header">
        <h1 className="title">{title}</h1>
        <p className="subtitle">{description}</p>
      </header>
    </>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
