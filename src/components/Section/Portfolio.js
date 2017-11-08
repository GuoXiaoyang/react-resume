import React from 'react';
import Modal from './Modal';
import Random from '../../utils/random';


class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false };
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ modalOpen: true });
  }

  handleCloseModal() {
    this.setState({ modalOpen: false });
  }

  render() {
    return (
      <div className = "columns portfolio-item"> 
        <div className="item-wrap" onClick={this.handleOpenModal}>
        <img src={this.props.entry.image.thumb} alt={this.props.entry.name}/>
        <div className="overlay">
          <div className="portfolio-item-meta">
            <h5>{this.props.entry.name}</h5>
            <p>{this.props.entry.category}</p>
          </div>
        </div>
        <div className="link-icon">
          <i className="icon-down-open"/>
        </div>
      </div> 
      <Modal entry={this.props.entry} isOpen={this.state.modalOpen}
      onRequestClose={this.handleCloseModal} />
      </div>
    );
  }
}
 
const Portfolio = ({ content }) => {
  const portfolio = Random.shuffleArray(content).slice(0, 8);
  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Portfolio</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
            {portfolio.map((entry, index) => (
              <Entry key={index} index={index} entry={entry}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;