import Image from 'next/image';
import { useRef, useEffect, useState} from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'

import {usePlayer} from '../../contexts/Player.Context';

import styles from  './styles.module.scss';
import { convertDurationToTimeString } from '../../utils/convertDurationToTimeString';

export function Player() {
  const audioRef= useRef<HTMLAudioElement>(null); // boa prática porque enquanto não tocar nada, esse vai ser o valor
  const [progress, setProgress] = useState(0);

  const {
    episodeList, 
    currentEpisodeIndex, 
    isPlaying, 
    isLooping,
    isShuffling,
    togglePlay,
    toggleLoop,
    toggleShuffle,
    setPlayingState, 
    playNext, 
    playPrevious,
    hasPrevious,
    hasNext,
    clearPlayerState
  } = usePlayer();

  useEffect(()=> {
    if(!audioRef.current){ // current é o valor da referência no React
      return;
    }
    if (isPlaying) {
      audioRef.current.play();
    }else{
      audioRef.current.pause();
    }
  }, [isPlaying])

  function setupProgressListener() {
    audioRef.current.currentTime = 0;

    audioRef.current.addEventListener('timeupdate', () => {
      setProgress(Math.floor(audioRef.current.currentTime));
    });
  }

  function handleSeek(amount: number){
    audioRef.current.currentTime = amount;
    setProgress(amount);
  }

  function handleEpisodeEnded() {
    if(hasNext){
      playNext();
    }else{
      clearPlayerState()
    }
  }

  const episode = episodeList[currentEpisodeIndex];

  return(
    <div className={styles.playerContainer}>
      <header>
        <img src="/playing.svg" alt="Tocando agora"/>
        <strong>Tocando agora </strong>
      </header>

      { episode ? ( // se existe algo em episode faça isso
        <div className={styles.currentEpisode}>
          <Image
            width ={592}
            height ={592}
            src={episode.thumbnail}
            objectFit="cover"  
          />
          <strong>{episode.title}</strong>
          <span>{episode.members}</span>
        </div>
      ) : ( // senão faça isso
        <div className={styles.emptyPlayer}>
         <strong>Selecione um podcastr para ouvir</strong>
        </div>
      ) }

      <footer className={!episode? styles.empty: ''}>
        <div className= {styles.progress}>
        <span>{convertDurationToTimeString(progress)}</span>
          { episode ? (
            <Slider
              max={episode.duration} // como está rodando em segundos, o valor máximo é em segundos
              value={progress}
              onChange={handleSeek}
              trackStyle={{ backgroundColor: '#04d361' }}
              railStyle={{ backgroundColor: '#9f75ff' }}
              handleStyle={{ borderColor: '#04d361', borderWidth: 4 }}
            />
          ) : (
            <div className={styles.slider}>
              <div className={styles.emptySlider} />
            </div>  
          ) }
          <span>{convertDurationToTimeString(episode?.duration ?? 0)}</span>
        </div>

        { episode && ( // && para fazer somente if verdadeiro e || para else
          <audio 
            src={episode.url}
            ref={audioRef}
            autoPlay
            onEnded={handleEpisodeEnded}
            loop={isLooping}
            onPlay={() => setPlayingState(true)}
            onPause={() => setPlayingState(false)}
            onLoadedMetadata={setupProgressListener}
          />
        )}

        <div className={styles.buttons}>
          <button 
            type="button" 
            disabled={!episode || episodeList.length === 1}
            onClick={toggleShuffle}
            className={isShuffling ? styles.isActive : ''}
          >
            <img src="/shuffle.svg" alt="Embaralhar"/>
          </button>
          <button type="button"  onClick={playPrevious} disabled={!episode || !hasPrevious}>
            <img src="/play-previous.svg" alt="Tocar anterior"/>
          </button>
          <button 
            type="button" 
            className={styles.playButton} 
            disabled={!episode} 
            onClick={togglePlay}
          >
            { isPlaying
              ? <img src="/pause.svg" alt="Tocar"/>
              : <img src="/play.svg" alt="Tocar"/>
            }
          </button>
          <button type="button" onClick={playNext} disabled={!episode || !hasNext}>
            <img src="/play-next.svg" alt="Tocar Próxima"/>
          </button>
          <button 
            type="button" 
            disabled={!episode}
            onClick={toggleLoop}
            className={isLooping ? styles.isActive : ''}
          >
            <img src="/repeat.svg" alt="Repetir"/>
          </button>
        </div>
      </footer>
    </div>
  )
}