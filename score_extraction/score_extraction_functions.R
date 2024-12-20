library(tidyverse)
library(stringr)
library(stringi)


contexto_score<-function(contexto_text){
  return(as.integer(str_extract(contexto_text, "(?<=in\\s)(.*?)(?=\\sguesses)")))
}

wordle_score<-function(wordle_text){
  return(as.integer(str_extract(wordle_text, "\\d+(?=/)")))
}

bandle_score<-function(bandle_text){
  return(as.integer(str_extract(bandle_text, "\\d+(?=/)")))
}

spotle_score<-function(spotle_text){
  return(nchar(sub("#\\d+", "", spotle_text)) - 21)
}



