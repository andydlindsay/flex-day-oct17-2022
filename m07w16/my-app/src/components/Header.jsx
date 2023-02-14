const Header = (props) => {
  // console.log(props);
  return (
    <div>
      <h2>{props.secretMessage}</h2>
    </div>
  );
};

// module.exports = Header; // CommonJS syntax
export default Header; // ESM syntax
