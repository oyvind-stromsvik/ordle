<?php

/**
 * @file
 * Parses the word lists we use for Ordle.
 */

// The source file of all accepted words in Norwegian Scrabble. About 850 000
// words or so at the time of this writing.
// Downloaded from http://www2.scrabbleforbundet.no/?p=4609
// @note: That URL doesn't seem very static and will mostly likely change when
// the list is eventually updated.
$all_words_text_file = 'source/nsf2021.txt';

// Arrays of arrays where the sub arrays are keyed by word length.
$array_of_all_words = [];

if ($file = fopen($all_words_text_file, 'rb')) {
  while (!feof($file)) {
    $line = fgets($file);

    // fgets() gives us the line break as well, we don't want that. And if there
    // are any spaces or whatnot we don't want those either.
    $word = trim($line);

    // I've made no changes to the application code so we currently only support
    // words that are exactly 5 characters long.
    $word_length = mb_strlen($word);
    if ($word_length !== 5) {
      continue;
    }

    $array_of_all_words[$word_length][] = $word;
  }
  fclose($file);

  // Iterate over each array in our full word list array and write the contents
  // to a javascript file containing a global array that our main application
  // can read.
  foreach ($array_of_all_words as $word_length => $array_of_words) {
    $file_contents = createJavascriptAllWordsArray($array_of_words);
    $file = fopen('../all_words.js', 'wb');
    fwrite($file, $file_contents);
    fclose($file);
    // @note: Since we only support one list at the moment anyway.
    break;
  }
}

/**
 * Create the Javascript all words array.
 */
function createJavascriptAllWordsArray($array) {
  $js_array_contents = implode(",", array_map(static function ($word) {
    return '"' . $word . '"';
  }, $array));

  // @todo: If we are ever to support word lengths other than 5 then this needs
  // to be updated. That probably goes for a lot of this to be honest.
  return 'var ordleAllWordsArray = [' . $js_array_contents . '];';
}

// Found a list of the 10000 most common words. Should give me a much better
// list of possible solution words.
// NB: A lot of crud in this file like numbers, wrong encoding, English words
// etc. And it has the number of occurences of the words from the original
// data set in front of the words so this list needs quite a bit of cleanup.
// But we'll use the total word list (which is much better curated) as a filter
// for this list so the data quality of this list doesn't matter that much.
// Downloaded from: https://www.nettavisen.no/artikkel/norges-mest-brukte-ord/s/12-95-413088
$solution_words_text_file = 'source/ord10000.txt';

// The solution words are more common words so that you don't get stupid words
// like "abaca" as a solution. Hopefully.
$array_of_solution_words = [];

// Whether we should shuffle the solution words or not. The way Wordle
// (and thus Ordle) currently works is that it goes sequentially through the
// list of words to find the daily word so the list must be randomized before
// putting it in the application otherwise it will be a rather boring affair.
// BUT we should be careful about when we do this because randomizing after the
// fact will make it possible to get the same words we've already had again.
$shuffle_solution_words = FALSE;

if ($file = fopen($solution_words_text_file, 'rb')) {
  while (!feof($file)) {
    $line = fgets($file);

    // fgets() gives us the line break as well, we don't want that. And if there
    // are any spaces or whatnot we don't want those either.
    $line = trim($line);

    // This file contains the occurence of the word first and the word second,
    // separated by a space.
    $words = explode(" ", $line);
    // Some lines are apparently even missing the word.
    if (!isset($words[1])) {
      continue;
    }

    $word = $words[1];

    $word_length = mb_strlen($word);
    if ($word_length !== 5) {
      continue;
    }

    // If the word is not in our all words array then we discard it. We can't
    // have a solution word that it's one of the guessable words. Also this is
    // the best possible sanitization we can have for this file since we know it
    // contains a lot of crap whereas the official Scrabble list is carefully
    // curated so by using that list as a filter we perfectly sanitize this file
    // as well.
    if (!in_array($word, $array_of_all_words[$word_length])) {
      continue;
    }

    $array_of_solution_words[$word_length][] = $word;
  }

  fclose($file);

  // Iterate over each array in our full word list array and write the contents
  // to a javascript file containing a global array that our main application
  // can read.
  foreach ($array_of_solution_words as $word_length => $array_of_words) {
    if ($shuffle_solution_words) {
      shuffle($array_of_words);
    }
    $file_contents = createJavascriptSolutionWordsArray($array_of_words);
    $file = fopen('../solution_words.js', 'wb');
    fwrite($file, $file_contents);
    fclose($file);
    // @note: Since we only support one list at the moment anyway.
    break;
  }
}

/**
 * Create the Javascript solution words array.
 */
function createJavascriptSolutionWordsArray($array) {
  $js_array_contents = implode(",", array_map(static function ($word) {
    return '"' . $word . '"';
  }, $array));

  // @todo: If we are ever to support word lengths other than 5 then this needs
  // to be updated. That probably goes for a lot of this to be honest.
  return 'var ordleSolutionWordsArray = [' . $js_array_contents . '];';
}
