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
    _id: 'anyid',
    title: 'Curso de Graph QL 1',
    teacher: 'Carlos Gutierrez',
    description: 'Esto es una prueba',
    topic: 'Trata de como tratar de ser tratado'
  },
  {
    _id: 'anyid',
    title: 'Curso de Graph QL 2',
    teacher: 'Carlos Gutierrez',
    description: 'Esto es una prueba',
    topic: 'Trata de como tratar de ser tratado'
  }
]

module.exports = {
  getCourses: () => {
    return courses
  }
}
