const sampleTodos = {
  todo1: {
    title: "Meet up with Denise",
    desc: "Having coffee with Lily",
    priority: 2,
    dateBegin: "01/01/2019",
    dateEnd: "01/02/2019",
    completed: false,
    projectKey: "project1",
  },

  todo2: {
    title: "Make dinner",
    desc: "Defrost the chicken",
    priority: 1,
    dateBegin: "01/01/2019",
    dateEnd: "05/04/2019",
    completed: false,
    projectKey: "project2",
  },

  todo3: {
    title: "Clean the dishes",
    desc: "Don't forget the pots",
    priority: 0,
    dateBegin: "01/01/2019",
    dateEnd: "01/01/2019",
    completed: true,
    projectKey: "project3",
  },

  todo4: {
    title: "Wash clothing",
    desc: "Use pink fabric softener",
    priority: 3,
    dateBegin: "01/01/2019",
    dateEnd: "07/04/2019",
    completed: false,
    projectKey: "project3",
  },

  todo5: {
    title: "Workout",
    desc: "Morning session",
    priority: 1,
    dateBegin: "01/01/2019",
    dateEnd: "11/10/2019",
    completed: true,
    projectKey: "project4",
  },
};

const sampleProjects = {
  project1: {
    title: "Project 1",
    desc: "Project desc 1",
    icon: 0,
    color: "blue",
  },

  project2: {
    title: "Project 2",
    desc: "Project desc 2",
    icon: 1,
    color: "blue",
  },

  project3: {
    title: "Project 3",
    desc: "Project desc 3",
    icon: 4,
    color: "blue",
  },

  project4: {
    title: "Project 4",
    desc: "Project desc 4",
    icon: 3,
    color: "blue",
  },
};

export { sampleTodos, sampleProjects };
