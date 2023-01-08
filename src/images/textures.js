import {NearestFilter, TextureLoader, RepeatWrapping} from 'three'
import {dirtImg, grassImg, glassImg, woodImg, logImg} from './images'

const dirtTextures = new TextureLoader().load(dirtImg)
const grassTextures = new TextureLoader().load(grassImg)
const glassTextures = new TextureLoader().load(glassImg)
const woodTextures = new TextureLoader().load(woodImg)
const logTextures = new TextureLoader().load(logImg)
const groundTextures = new TextureLoader().load(grassImg)

dirtTextures.magFilter = NearestFilter
logTextures.magFilter = NearestFilter
woodTextures.magFilter = NearestFilter
grassTextures.magFilter = NearestFilter
glassTextures.magFilter = NearestFilter
groundTextures.magFilter = NearestFilter
groundTextures.wrapS = RepeatWrapping
groundTextures.wrapT = RepeatWrapping

export {
  dirtTextures,
  grassTextures,
  glassTextures,
  woodTextures,
  logTextures,
  groundTextures,
}
