/**
 * @typedef {Object} Movie
 * @property {number} id
 * @property {string} nome
 * @property {string|null} img_capa
 * @property {string|null} img_background
 * @property {string} sinopse
 * @property {boolean} adulto
 * @property {number[]} generos_ids
 * @property {string} data_lancamento
 * @property {boolean} video
 * @property {number}  popularidade
 */


/**
 * @typedef {Object} Actor
 * @property {number} id
 * @property {string} nome
 * @property {string} personagem
 * @property {string|null} img_perfil
 * @property {boolean} adult
 * @property {string} genero
 * @property {number} popularidade
 */



/**
 * @typedef {Object} Genre
 * @property {number} id
 * @property {string} nome
 */
/**
 * @typedef {Object} LinguagemFalada
 * @property {string} iso_639_1
 * @property {string} nome
 */

/**
 * @typedef {Object} MovieDetails
 * @property {number} id
 * @property {boolean} adult
 * @property {string|null} img_capa
 * @property {string|null} img_background
 * @property {number} orcamento
 * @property {Genre[]} generos
 * @property {string|null} homepage
 * @property {string[]} pais_origem
 * @property {string} lingua_original
 * @property {string} titulo_original
 * @property {string} sinopse
 * @property {number} popularidade
 * @property {string} data_lancamento
 * @property {number} receita
 * @property {number} tempo_execucao
 * @property {LinguagemFalada[]} linguas_faladas
 * @property {string} status
 * @property {string} tagline
 * @property {string} titulo
 * @property {boolean} video
 * @property {number} nota
 */