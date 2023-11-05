import { Modal } from 'components/Modal/Modal';
import { Image, Item } from './ImageGalleryItem.styled';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { smallImage, largeImage, tags } = this.props;
    const { isModalOpen } = this.state;

    return (
      <>
        <Item>
          <Image src={smallImage} alt={tags} onClick={this.openModal} />

          {this.state.isModalOpen && (
            <Modal
              largeImage={largeImage}
              tags={tags}
              isOpen={isModalOpen}
              onClose={this.closeModal}
            />
          )}
        </Item>
      </>
    );
  }
}
