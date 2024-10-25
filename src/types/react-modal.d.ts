declare module 'react-modal' {
  import React from 'react';

  interface ModalProps {
    isOpen?: boolean;
    onRequestClose?: () => void;
  }

  export default class Modal extends React.Component<ModalProps> {}
}