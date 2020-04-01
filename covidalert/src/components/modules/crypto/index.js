import Seal from './seal'
import { default as Paillier } from './paillier'
import { default as Homomorphic } from './homomorphic'
import { default as Constants } from '../constants'
import { createModuleFactory } from '../../factory'
import module from './module'

export default createModuleFactory({
  homomorphic: Homomorphic,
  createSeal: Seal,
  createPaillier: Paillier,
  constants: Constants.CRYPTO
})(module)
