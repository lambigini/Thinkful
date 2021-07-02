function BreadCrumb({ name, url }) {
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href={`${url}`}>{name}</a>
          </li>
          <li className="breadcrumb-item">
            <a>Study</a>
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default BreadCrumb;
