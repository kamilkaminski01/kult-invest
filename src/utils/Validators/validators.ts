export const valid = {
  required: {
    value: true,
    message: 'Pole jest wymagane'
  },
  emailPattern: {
    value:
      /^(([^<>()[\]\\.,;: @"]+(\.[^<>()[\]\\.,;: @"]+)*)|(".+"))@((([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Nieprawidłowy adres email'
  },
  phonePattern: {
    value: /^[1-9]{1}[-\s\\.]?[0-9]{2}[-\s\\.]?[0-9]{3}[-\s\\.]?[0-9]{3}$/im,
    message: 'Nieprawidłowy numer telefonu'
  },
  namesPattern: {
    value:
      /^[a-zA-Z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\u0100-\u0148\u014a-\u017f]{1}[a-zA-Z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\u0100-\u0148\u014a-\u017f ,.'-]{0,28}[a-zA-Z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\u0100-\u0148\u014a-\u017f.]{1}$/,
    message: 'Nieprawidłowy format'
  },
  minLength: (length: number) => {
    return {
      value: length,
      message: `Minimalna ilość znaków dla tego pola to ${length}`
    }
  },
  maxLength: (length: number) => {
    return {
      value: length,
      message: `Maksymalna ilość znaków dla tego pola to ${length}`
    }
  }
}
