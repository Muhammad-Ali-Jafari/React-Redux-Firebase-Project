const initState = {
  projects: [
    {
      id: "1",
      title: "petFinder",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, dolorum porro exercitationem praesentium sint dolor labore aliquid nesciunt dignissimos iusto natus quod illo. Adipisci veniam quos fuga tempore eius distinctio?"
    },
    {
      id: "2",
      title: "Best Cook",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, dolorum porro exercitationem praesentium sint dolor labore aliquid nesciunt dignissimos iusto natus quod illo. Adipisci veniam quos fuga tempore eius distinctio?"
    },
    {
      id: "3",
      title: "Telegraph",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, dolorum porro exercitationem praesentium sint dolor labore aliquid nesciunt dignissimos iusto natus quod illo. Adipisci veniam quos fuga tempore eius distinctio?"
    }
  ]
};
const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("project-created", action.project);
  }

  return state;
};

export default projectReducer;
