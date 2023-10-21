import React from 'react';
import Modal from "@/app/components/Modal";
// Assuming you're using Next.js's Image component
import Image from 'next/image';

interface ImageModalProps {
  isOpen?: boolean;
  onClose: () => void;
  src?: string | null;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  src
}) => {

  if (!src) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div>
        <Image
          alt="Image"
          className="object-cover"
          src={src}
          layout="responsive"
          width={500}
          height={500}
        />
      </div>
    </Modal>
  );
}

export default ImageModal;
