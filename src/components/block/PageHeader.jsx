const PageHeader = (props) => {
  return (
    <div className="common__pageHdr">
      <hgroup className="common__pageHdrContent">
        <h1 className="common__pageHdrTtl">
          <svg>
            <text x="0%">{ props.title }</text>
          </svg>
        </h1>
        <p className="common__pageHdrSubTtl">{ props.subtitle }</p>
      </hgroup>
    </div>
  )
}

export default PageHeader;