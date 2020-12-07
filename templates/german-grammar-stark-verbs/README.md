# German starke Verben

![cover](readme-images/cover.png)

This template for [Anki](https://apps.ankiweb.net/) allows you to study the [starke Verben](https://en.wikipedia.org/wiki/Germanic_strong_verb)  (strong verbs). All the verbs included in the package have been taken from this [source](https://www.deutschplus.net/pages/Tabelle_starker_Verben)  **although** verbs marked as *C2* have been excluded since they aren't used as often.


<p align="center">

<img src="readme-images/cover-mobile.png" alt="cover-mobile" width="300px" />

</p>

---

## Features

**Each card includes:**

- The verb in German.
- The conjugation of the verb in present 3d person, past and participle.
- A list of other verbs that belong to the same group and are conjugated likewise.
- A story in German that includes the group verbs to better remember them all. It include pictures.

<p align="center">

  <img src="readme-images/anki-phone.gif" alt="cover-mobile"/>

</p>



---

## Views

| Front                               | Back                              |
| ----------------------------------- | --------------------------------- |
| ![phone-front](readme-images/phone-front.png)     | ![phone-back](readme-images/phone-back.png)     |
| ![tablet-front](readme-images/tablet-front.png)   | ![tablet-back](readme-images/tablet-back.png)   |
| ![desktop-front](readme-images/desktop-front.png) | ![desktop-back](readme-images/desktop-back.png) |

<p align="center">

  <img src="readme-images/screens.gif" alt="cover-mobile"/>

<p/>

> New version includes padding top-bottom in header in mobile version.



---

### Modifying the stories

I kept the stories separated from the main html section of Anki so if you want to modify the story for a certain card or group of card you have to edit that card and specifically the html of the field `story` that is between `<style>` and `<script>` as you can see in the following gif:

![edit-story](readme-images/edit-story.gif)


The structure of a story is:

```html
<div class="story">
  <!--- Slide 1 -->
  <div class="story__item" style="display: block;">
    <!-- Here the images to appear on top of the story, as many as you want -->
    <img class="story__emoji" src="baker.png"> 
    <!-- One paragraph for the story. Remember to wrap the key verb with the <b> tag so that it stands out in the story -->
    <p class="story__text">Der Bäcker hat einen speziellen Kuchen gebacken (<b>backen</b>).</p>
  </div>
  <!-- Slide 2 -->
  <div class="story__item" style="display: none;">
    <img class="story__emoji" src="images/truck.png">
    <img class="story__emoji" src="images/hit.png">
    <p class="story__text">...und der Bäcker slägt(<b>schlagen</b>) ihn.</p>
  </div>
</div>
```

> Remember that if you add your own images in local, you have to paste them in the Anki [media folder](https://docs.ankiweb.net/#/files?id=file-locations) in order for them to appear in Anki and be sync with your mobile device.



---

### Download

- Download template [here]()🔗 .
- Download media (images) here and paste them in the [media folder](https://docs.ankiweb.net/#/files?id=file-locations) of your Anki. 
