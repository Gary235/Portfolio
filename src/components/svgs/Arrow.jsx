
const Arrow = (props) => {
  const {className} = props;

  return (
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
    >
      <path
        d="M5.40196 11.7506C6.55666 13.7506 9.44341 13.7506 10.5981 11.7506L14.7777 4.51129C15.9324 2.51129 14.4891 0.0112934 12.1797 0.0112934H3.82042C1.51102 0.0112934 0.0676415 2.51129 1.22234 4.51129L5.40196 11.7506Z"
        fill="#FFF84B40"
      />
    </svg>
  )
}

export default Arrow;
