const getTransitionStyles = timeout => {
  return {
    entering: {
      opacity: 0
    },
    entered: {
      transition: `all ${timeout}ms ease-in-out`,
      opacity: 1,
      transform: 'translateY(30px)'
    },
    exiting: {
      transition: `all ${timeout}ms ease-in-out`,
      opacity: 0,
      transform: 'translateY(0px)'
    }
  }
}
export default ({ timeout, status }) => getTransitionStyles(timeout)[status]
