# PROMETHEE II - A Method Of Multi Criteria Decision Support|Analysis|Making (MCDM)

🔗 Live Demo: <a href="https://mouradsidhoumi.github.io/promethee2/" target="_blank">https://mouradsidhoumi.github.io/promethee2/</a>

📘 If you understand _french_, <a href="https://pdfhost.io/v/9wScft4g5_Memoire_L3_Sidhoumi.pdf" target="_blank">here is a mini-thesis-like</a> that I did about this project 🎓.


---

### Two case scenarios are covered in this readme for using the method :

- I just want to know **how to use it** (express way 🏎).
- I want understand **how it works** (with an intro to MCDM). [Content soon 🚧🏗🛠]

---
## How to use it : 🏎
① - Identify which desision you want to make.  
② - Define what are the possible actions(alternatives) to choose between, and the criterias that you gona evaluate each action on.  
③ - Dress a table (Actions⨯Criterias) with the collected data, on an Excel file(recommanded), or by filling the table in the <a href="https://mouradsidhoumi.github.io/promethee2/" target="_blank">**website**</a>.  

*(Easy until here, now it time for 🔥)*  

*If you choosed to fill an Excel file, make sure to have [***This Formating***](https://mouradsidhoumi.github.io/promethee2/img/file_formatting.png) so it can works on the website. The optional part (which we gona discuss in a jiff) is not required on the Excel file because you can fill it in the website, but it is still required for the method to operate.   

④ - Give for each criteria a : 
- <u>**Weigth**</u> ; the more it is the more the criteria is important.
- <u>**Boolean for maximize (yes|1) or minimize (no|0)**</u>. Example in a purchase, benefits (as quality) are to maximize, and expenses (as price) are to minimize.
- <u>**Prefrence function**</u>, to keep it simple for you while staying realistic, I recommend to make them all ***"Linear"*** (putting number ***"5"*** in the Excel file), because it is the general case that includes the majority of prefrence functions.  

Now, imagine that there is a score diffrence between two actions on a criteria, that *diffrence value* can be significant or insignificant depanding on how you see the criteria.  
- <u>**Indifference Limen**</u>, the highest value for that *diffrence* so it still insignificant (negligible), meaning that they are as same.
- <u>**Preference Limen**</u>, the minimum value for that *diffrence* where the superior action is definitely better over the other one (just on that particular criteria, which does not imply that it is the final action decision).  

The preference limen have to be superior or equal to the indifference limen, one or both can also be zero.  

⑤ - That's it, now you can execute the method directly or after importing the Excel file and revising the data.

---

Content soon 🚧🏗🛠
<!--
## Content soon 🚧🏗🛠  
My Anchored Heading {#my-anchor}
<a id="my-header"></a> Header
[header](#my-header),any other.

-->

<!--
## Content soon 🚧🏗🛠 
-->
