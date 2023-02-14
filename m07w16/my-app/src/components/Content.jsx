const Content = (props) => {
  console.log(props);
  return (
    <div>
      <h2>Content component</h2>
      {props.children}
    </div>
  );
};

export default Content;
