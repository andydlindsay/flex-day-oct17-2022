import './button.css';

const Button = (props) => {
  let className = 'button';

  if (props.color === 'green') {
    className += ' green';
  }

  return (
    <button
      className={className}
      onClick={() => props.onClick('Monday')}
    >{props.children || 'Click me!'}</button>
  );
};

export default Button;
