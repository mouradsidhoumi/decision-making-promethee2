# PROMETHEE II - A Method Of Multi Criteria Decision Support|Analysis|Making (MCDM)

🔗 Live Demo: <a href="https://mouradsidhoumi.github.io/promethee2/" target="_blank">https://mouradsidhoumi.github.io/promethee2/</a>

📘 If you understand _french_, <a href="https://pdfhost.io/v/9wScft4g5_Memoire_L3_Sidhoumi.pdf" target="_blank">here is a mini-thesis-like</a> that I did about this project 🎓.


---

### 🧭 Two case scenarios are covered in this readme for using the method :

- [I just want to know **how to use it** (express way ⚡).](#-how-to-use-it-)
- [I want understand **how it works** (with an intro to MCDM). [in works 🏗🛠]](#𝘉𝘳𝘪𝘦𝘧-ℑ𝔫𝔱𝔯𝔬𝔡𝔲𝔠𝔱𝔦𝔬𝔫-𝔱𝔬-𝔐𝔲𝔩𝔱𝔦-ℭ𝔯𝔦𝔱𝔢𝔯𝔦𝔞-𝔇𝔢𝔠𝔦𝔰𝔦𝔬𝔫-𝔐𝔞𝔎𝔦𝔫𝔤)

---
## 𝘉𝘳𝘪𝘦𝘧 ℑ𝔫𝔱𝔯𝔬𝔡𝔲𝔠𝔱𝔦𝔬𝔫 𝔱𝔬 𝔐𝔲𝔩𝔱𝔦 ℭ𝔯𝔦𝔱𝔢𝔯𝔦𝔞 𝔇𝔢𝔠𝔦𝔰𝔦𝔬𝔫 𝔐𝔞𝔎𝔦𝔫𝔤:
As it says, ~ 𝕿𝖍𝖊 𝖍𝖆𝖗𝖉𝖊𝖘𝖙 ..𝖎𝖘 𝖙𝖔 𝖈𝖍𝖔𝖔𝖘𝖊 ~   
Decision support is a set of techniques and methods used during the decision-making process, when confronted to uncertainty, multiple & contradictory goals..
In the old days, it was based on consultant experience, historical analysis, mathematics such as statistical, optimization or probabilistic tools. With the development of computing, it progressed and became part of *operational research* and *business intelligence*.  
Desicion support include many methods each family depend on the approche as the number (big/limited) of decision-makers and alternatives(actions to choose from). Multi criteria desicion support|making|analysis is one of the approches, with limited number of decision-makers & alternatives which is the most common case.  

### Basic elements:
- *Action* : or alternative, one of the possible solutions for the treated problem, there are several types of actions, among them: real action which is executable, or imaginary action that is made idealist for the study.  
- *Criteria* : qualitative or quantitative expression that evaluates actions, it also can be a function, taking its values in a ordered set and representing the decision-maker's preferences according to a certain point of view.  
- *Objectives* : or goals, are what the decision-maker wants to optimize by using decision support, each one can be to maximize, minimize or to maintain in a certain state.  
- *Performance Matrix* : or evaluation matrix, is a 2-dimensional table "action×criteria" (or the reverse), each intersection represents the evaluation of action *i* in relation to criteria *j*.  

### Important concepts & notions:
- **Multi-criteria problem** : what has to be done:  
    α - *Choice* : select the smallest possible set of "best actions".  
    β - *Sorting (classification)* : assign actions to predefined categories.  
    γ - *Ranking* : total or partial ordering of actions according to their relative qualities.  
    δ - *Description (scoring)* : describe the actions and their consequences in a formalized way.  

- **Aggregation of preferences** :   
    A crucial process, which allows to obtain information on the global preference between potential actions. Taking into account two operations:  
    - *Multi-criteria aggregation* : synthesize *n* values into a single one.
    - *Comparison* : compare two given performances.

    According to their order, two approaches follow from this, *"aggregate then compare"* & *"compare then aggregate"*, both generate different results and rise several methods.  

    What also takes part in the diversity of methods is the type of the multi-criteria aggregation, including: *total*, *partial* and *local iterative*.  

### PROMETHEE family:
***P**reference **R**anking **O**rganization **METH**ode for **E**nrichment of **E**valuations*  
Family of multi-criteria decision support methods. Characterizing six types of criteria; makes possible to define relations of outranking, indifference and incomparability between actions and to rank them from the best to the least good. The basic elements of these methods were first proposed in 1982 by Professor Jean-Pierre Brans in Brussels. These methods are popular and there are several variants of them (at least five). They have been used successfully in many decision-making contexts around the world. A non-exhaustive list of scientific publications on extensions, applications and discussions related to the PROMETHEE methods has been published.  

### PROMETHEE Ⅱ method:
Give a *total order* of the potential actions (solves ranking problem γ), using the *"compare then aggregate"* approach, with *partial aggregation*.  
post-script : PROMETHEE Ⅰ arranges actions to a partial order and accepting incomparability relation.  

---
<u>ℹ</u>: Here, to assimilate better, I'm gona break the sequencing of this reading by bringing the usage of the PROMETHEE Ⅱ demo webapp, with abstraction of how it works under the hood which we will come back to it after.

## ⚡ How to use it :

❶ - Identify which desision you want to make.  
❷ - Define what are the possible actions(alternatives) to choose between, and the criterias that you gona evaluate each action on.  
❸ - Dress a table (Actions⨯Criterias) with the collected data, on an Excel file(recommanded), or by filling the table in the <a href="https://mouradsidhoumi.github.io/promethee2/" target="_blank">**website**</a>.  

*(Easy until here, now it time for 🔥)*  

<b>*</b>If you choosed to fill an Excel file, make sure to have [***this formating***](https://mouradsidhoumi.github.io/promethee2/img/file_formatting.png) so it can works on the website. The optional part (which we gona discuss in a jiff) is not required on the Excel file because you can fill it in the website, but it is still required for the method to operate.   

<b>*</b>If you have qualitative values for a criteria, for example: "exellent, very good, good, bad", turn them into numeric values as "4, 3, 2, 1". And 1/0 for yes/no.

❹ - Give for each criteria a : 
- <u>**Weigth**</u>, aka. coefficient.
- <u>**Boolean for maximize (yes|1) or minimize (no|0)**</u>. An example in a purchase, benefits (as quality) are to maximize, and expenses (as price) are to minimize.
- <u>**Prefrence function**</u>, if you want to keep it simple while staying realistic, make them all ***"Linear"*** (putting number ***"5"*** in the Excel file), because it is the general case that includes almost all of prefrence functions.  

Now, imagine that there is a score diffrence between two actions on a criteria, that *diffrence value* can be significant or insignificant depanding on how you see the criteria.  
- <u>**Indifference threshold**</u>, the highest value for that *diffrence* so it still insignificant (negligible), meaning that they are as same.
- <u>**Prefrence threshold**</u>, the minimum value for that *diffrence* where the superior action is definitely better over the other one (just on that particular criteria, which does not imply that it is the final action decision).  

The prefrence threshold have to be superior or equal to the indifference threshold, one or both can also be zero.  

❺ - That's it, now you can execute the method directly or after importing the Excel file and revising the data.


---
## Prefrence Fuctions :  
Allows to personalize the prefrence of an action over an other according their diffrence on the criteria.  
***d*** : diffrence.   
𝑷 = ***f(d)***  : *prefrence* (function).  
***q*** : indifference threshold.  
***p*** : prefrence threshold.  

For d the diffrence between actions pair (A𝒊, A𝒋) *(not the reverse)* on an criteria, if:  
- d < q ⇔ P = 0 : action 𝒊 is *indifferent* to action 𝒋.  
- q < d << p ⇔ P ≈ 0 : A𝒊 is *weakly preferred* over A𝒋.  
- q << d < p ⇔ P ≈ 1 : A𝒊 is *strongly preferred* over A𝒋.  
- p < d ⇔ P = 1 : A𝒊 is *absolutely(or strictly) preferred* over A𝒋.  

Here are the 6 types, you can determine **d** and 𝑷 from the graphs, comments on the right:
<table>
    <tr>
        <td>
            <center>Type 1: Usual</center>
            <br/>
            <img style="min-width:150px;width:175px" src="https://images2.imgbox.com/02/dd/sVL4ucmu_o.png" alt="graph1"/>
        </td>
        <td>
            • Absolute preference once there is positive diffrence.<br/>
            • Good for criterias with qualitative or binary values.<br/>
            • No parameter to define.
        </td>
    </tr>
    <tr>
        <td>
            <center>Type 2: U-shape</center>
            <br/>
            <img style="width:175px" src="https://images2.imgbox.com/37/55/k5pCTsmQ_o.png" alt="graph2"/>
        </td>
        <td>
        • As type 1 with an indiffrence zone (but not for binary values).<br/>
        • Indifference threshold <b>q</b> needs to be defined (<b>p</b> is merged with it).
        </td>
    </tr>
    <tr>
        <td>
        <center>Type 3: V-shape</center>
        <br/>
        <img style="width:175px" src="https://images2.imgbox.com/57/fb/PqW9R0un_o.png" alt="graph3"/>
        </td>
        <td>
        • Prefrence threshold <b>p</b> needs to be defined (<b>q</b> = 0).<br/>
        • According to <b>d</b>, when it is below <b>p</b>, A𝒊 is preferred progressively/gradually over A𝒋.<br/>
        • Good for real numbers measured on a continuous scale, where the gap values are possible.
        </td>
    </tr>
    <tr>
        <td>
        <center>Type 4: Level</center>
        <br/>
        <img style="width:175px" src="https://images2.imgbox.com/53/bb/YyiMp5Ud_o.png" alt="graph4"/>
        </td>
        <td>
        • When you can affirm, for <b>d</b> between <b>q</b> & <b>p</b>, that A𝒊 is neither strictly preferred over A𝒋 nor indifferent, but be given ½ point.<br/>
        • <b>q</b> & <b>p</b> needs to be defined.
        </td>
    </tr>
    <tr>
        <td>
        <center>Type 5: Linear</center>
        <br/>
        <img style="width:175px" src="https://images2.imgbox.com/27/d9/i1DGVLOz_o.png" alt="graph5"/>
        </td>
        <td>
        • As type 3 including room for indifference with <b>q</b> to be define.<br/>
        • This type includes types 1, 2 and 3.
        </td>
    </tr>
    <tr>
        <td>
        <center>Type 6: Gaussian</center>
        <br/>
        <img style="width:175px" src="https://images2.imgbox.com/d1/01/43buDmp7_o.png" alt="graph6"/>
        </td>
        <td>
        • The <i>standard deviation</i> <b>σ</b><i>(sigma)</i> (also called <i>gaussian threshold <b>S</b></i>) is to define, it is recommended to choose <b>q</b> & <b>p</b> first then set it between (or just their average).<br/>
        [in works 🏗🛠]
        </td>
    </tr>
</table>


---
## ⚙ PROMETHEE II Process : [missing formulas 🏗🛠]

After having all data (covered in how to use it) here is how it works:  
**Step 0 (optionnal):** Normalize the action⨯criteria evaluations and criterias weights, making the values concise, between 0 & 1 (with the consideration of the criteria if it is to maximize or minimize, which reverse values in the second case).  
**Step 1:** In a new matrix, calculate for every action ordered pair, the diffrence between each of their criterias evaluations.  

**Step 2:** Apply prefrence function on diffrences values according to each criteria pref. func, here we get a matrix that is called prefrence degrees.

**Step 3:** Sum for every action ordered pair: the respectives prefrence degrees, each one multiplied by its weight criteria (if you didn't do *step 0* then devide each result on sum of weights). Here we get prefrence indexes.   

**Step 4:**
- Sum each action ordered pair**s** that starts with the same action. Here we get for every action a positive outranking flow.  
- Sum each action ordered pair**s** that ends with the same action. Here we get for every action a negative outranking flow.  
- (optionnal: devide each flow on the number of actions - 1)

**Step 5:** For every action sum their positive and negative flow, we get the net flows.

**Step 6** Sort the net flows from biggest to smallest. Here we get the final ranking with PROMETHEE II method!  


---

<!--
**Step 1:** Determine the possible actions (alternatives), and the criterias of selection. Evaluate each action on the criterias and include the values in a matrix.  
**Step 2:** Give a weight for each criteria. Higher it is, important is the criteria.  
**Step 3:** 
if the number of actions is *n*, this new matrix has a size of *n*·(*n*-1)⨯criteria
 and devide each sum on criterias weights sum.
-->

---
My Anchored Heading { }
<a id="my-header"></a> Header
[header](#my-header),any other.
My Anchored Heading {#my-anchor} Header header,any other.
<!--
## Content soon 🚧🏗🛠  

-->

<!--
## Content soon 🚧🏗🛠 
-->
