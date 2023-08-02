function ButtonSecondary({ text, to }) {
  return (
    <a href={to} className="btn text-lg flex font-bold px-6 h-12 border border-solid border-primary rounded-lg text-primary items-center justify-center hover:bg-light">
      {text}
    </a>
  );
}

function ButtonPrimary({ text, to }) {
    return (
      <a href={to} className="btn text-lg flex font-bold px-6 h-12 border bg-primary rounded-lg text-white items-center justify-center hover:opacity-90">
        {text}
      </a>
    );
  }
  

export { ButtonSecondary, ButtonPrimary };
