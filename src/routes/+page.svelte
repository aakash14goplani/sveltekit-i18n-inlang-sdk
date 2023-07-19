<script lang="ts">
  import { i, language, languages, switchLanguage } from "@inlang/sdk-js";
  import type { PageData } from './$types';
  import { onMount } from 'svelte';

  let selected = 'en';
  let randomNumber = 0;

  onMount(() => {
    const valueFromStorage = localStorage.getItem('language') || 'en';
    selected = valueFromStorage;
    localStorage.setItem('language', valueFromStorage);
  })

  function getCurrencyCode(): string {
    switch (language) {
      case 'en':
        return 'USD';
      case 'hi':
        return 'INR';
      case 'fr':
        return 'EUR';
      default:
        return 'USD';
    }
  }

  function dateFormatter(value: Date | number | string) {
    return new Intl.DateTimeFormat(language, { year: "numeric", month: "long", day: "numeric" }).format(value);
  }

  function timeFormatter(value: Date | number | string) {
    return new Intl.DateTimeFormat(language, { hour: 'numeric', minute: 'numeric' }).format(value);
  }

  function numberFormatter(value: number) {
    return new Intl.NumberFormat(language).format(value);
  }

  function currencyFormatter(value: number) {
    return new Intl.NumberFormat(language, { style: 'currency', currency: getCurrencyCode() }).format(value);
  }
</script>

<div class="container">
  <div class="container__title">
    <h1>{i('heading')}</h1>
  </div>
  <div class="container__toggle">
    <span>{i('toggle_label')}: </span>
    <select bind:value={selected} on:change={() => switchLanguage(selected)}>
      {#each languages as lang}
        <option value="{lang}">{lang.toUpperCase()}</option>
      {/each}
    </select>
  </div>
  <div class="container__content">
    <p>{i('body_text', { download: numberFormatter(802), date: dateFormatter(new Date(2023, 6, 14, 0, 0, 0, 0)) })}</p>

    <div class="container__content__plural">
      <div class="container__content__plural__buttons">
        <button class:active={randomNumber === 0} on:click={() => randomNumber = 0}>{numberFormatter(0)}</button>
        <button class:active={randomNumber === 1} on:click={() => randomNumber = 1}>{numberFormatter(1)}</button>
        <button class:active={randomNumber === 2} on:click={() => randomNumber = 2}>{numberFormatter(2)}</button>
      </div>
      <span>{i('awards', { value: numberFormatter(randomNumber) })}</span>
    </div>

    <div class="container__content__formatter">
      <span><strong>Time: </strong>{i('time', { value: timeFormatter(new Date()) })}</span>
      <span><strong>Date: </strong>{i('date', { value: dateFormatter(new Date()) })}</span>
      <span><strong>Currency: </strong>{i('currency', { value: currencyFormatter(802) })}</span>
    </div>
  </div>
</div>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    margin: 1rem;

    &__title {
      display: flex;
      justify-content: center;
    }

    &__toggle {
      padding: 0 1rem;
      font-size: 1.4rem;
      line-height: 2rem;

      select {
        padding: 0.25rem;
        font-size: 1rem;
        margin-left: 1rem;
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      padding: 0 1rem;
      font-size: 1.4rem;
      line-height: 2rem;
      text-align: justify;

      &__plural {
        display: flex;
        flex-direction: column;
        margin: 1rem 0;
        
        button {
          margin-right: 2rem;
        }

        span {
          margin-top: 1rem;
        }

        .active {
          color: blue;
          background-color: aliceblue;
          padding: 0.5rem;
        }
      }

      &__formatter {
        display: flex;
        flex-direction: column;
        margin-top: 1rem;
      }
    }
  }
</style>
