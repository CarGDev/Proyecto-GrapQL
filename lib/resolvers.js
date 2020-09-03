'use strict'

const courses = [
  {
    _id: 'anyid',
    title: 'Curso de Graph QL',
    teacher: 'Carlos Gutierrez',
    description: 'Esto es una prueba',
    topic: 'Trata de como tratar de ser tratado'
  },
  {
    _id: 'anyid2',
    title: 'Curso de Graph QL 1',
    teacher: 'Carlos Gutierrez',
    description: 'Esto es una prueba',
    topic: 'Trata de como tratar de ser tratado'
  },
  {
    _id: 'anyid3',
    title: 'Curso de Graph QL 2',
    teacher: 'Carlos Gutierrez',
    description: 'Esto es una prueba',
    topic: 'Trata de como tratar de ser tratado'
  }
]

module.exports = {
  Query: {
    getCourses: () => {
      return courses
    },
    getCourse: (root, args) => {
      const course = courses.filter(course => course._id === args.id)
      return course.pop()
    }
  }
}
