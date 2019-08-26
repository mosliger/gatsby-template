import React from 'react'

export default class Home extends React.Component {
  render() {
    const { transition } = this.props
    return (
      <div style={transition && transition.style}>
        <div className='container'>
          <h1>Hello word!</h1>
          <div className='row'>
            <div className='D-4 M-12'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus vero molestias esse ullam consequatur in ea? Saepe, numquam iure dignissimos ducimus dicta debitis, esse nam, illum modi praesentium eligendi. Perferendis nesciunt incidunt vitae, iste hic voluptas, id iure quasi repellat tenetur optio minima earum, maiores sed explicabo quo enim fugit. Vel nemo vero quis ipsam adipisci, architecto, reprehenderit voluptatum accusamus possimus impedit cumque placeat modi, molestias beatae iste excepturi libero pariatur alias in soluta laborum voluptas perspiciatis! Rem, explicabo sed maiores officiis, architecto sunt tempore, cumque quidem ipsam laudantium nostrum ab minus sequi placeat corporis impedit itaque vero obcaecati.
            </div>
            <div className='D-4 M-12'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus vero molestias esse ullam consequatur in ea? Saepe, numquam iure dignissimos ducimus dicta debitis, esse nam, illum modi praesentium eligendi. Perferendis nesciunt incidunt vitae, iste hic voluptas, id iure quasi repellat tenetur optio minima earum, maiores sed explicabo quo enim fugit. Vel nemo vero quis ipsam adipisci, architecto, reprehenderit voluptatum accusamus possimus impedit cumque placeat modi, molestias beatae iste excepturi libero pariatur alias in soluta laborum voluptas perspiciatis! Rem, explicabo sed maiores officiis, architecto sunt tempore, cumque quidem ipsam laudantium nostrum ab minus sequi placeat corporis impedit itaque vero obcaecati.
            </div>
            <div className='D-4 M-12'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus vero molestias esse ullam consequatur in ea? Saepe, numquam iure dignissimos ducimus dicta debitis, esse nam, illum modi praesentium eligendi. Perferendis nesciunt incidunt vitae, iste hic voluptas, id iure quasi repellat tenetur optio minima earum, maiores sed explicabo quo enim fugit. Vel nemo vero quis ipsam adipisci, architecto, reprehenderit voluptatum accusamus possimus impedit cumque placeat modi, molestias beatae iste excepturi libero pariatur alias in soluta laborum voluptas perspiciatis! Rem, explicabo sed maiores officiis, architecto sunt tempore, cumque quidem ipsam laudantium nostrum ab minus sequi placeat corporis impedit itaque vero obcaecati.
            </div>
          </div>
        </div>
      </div>
    )
  }
}
