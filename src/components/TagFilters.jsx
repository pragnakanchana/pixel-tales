import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  container: {
    display: "flex",
  },
  pill: {
    padding: "8px 8px",
    margin: "4px 8px",
    backgroundColor: "#F3F3F3",
    borderRadius: 24,
    fontSize: 18,
    color: "#663399",
    borderColor: "#663399",
    border: '1px solid',
  },
  horizontalSeperator: {
    borderTop: "1px solid #CBCBCB",
  },
  selectedPill:{
    padding: "8px 8px",
    margin: "4px 8px",
    backgroundColor: "#663399",
    borderRadius: 24,
    fontSize: 18,
    color: "#ffffff",
    borderColor: "#663399",
    border: '1px solid',
  }
});

const TagFilters = ({ data = [], onFilterClick }) => {
  return (
    <div>
      <hr {...stylex.props(styles.horizontalSeperator)} />
      <div {...stylex.props(styles.container)}>
        {data.map((item) => (
          <div
            {...stylex.props(!item.isApplied?  styles.selectedPill:styles.pill)}
            onClick={(e) => {
              console.log("check e ",e)
              onFilterClick(item.label);
            }}
          >
            {item.label}
          </div>
        ))}
      </div>
      <hr {...stylex.props(styles.horizontalSeperator)} />
    </div>
  );
};

export default TagFilters;
