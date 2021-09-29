
import {
  Errors
} from 'moleculer';
const {
  MoleculerClientError,
  MoleculerServerError,
} = Errors

export const assertMoleculerClientError = (v: boolean, message: string, type: string = 'ERR_ClientError', code: number = 400) => {
  if (!v) {
    throw new MoleculerClientError(message, code, type, {
      error: true,
      code,
      message,
      type,
    })
  }
}

export const assertMoleculerServerError = (v: boolean, message: string, type: string = 'ERR_ServerError', code: number = 500) => {
  if (!v) {
    throw new MoleculerServerError(message, code, type, {
      error: true,
      code,
      message,
      type,
    })
  }
}