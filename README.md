# PROMETHEE II - A Method Of Multi Criteria Decision Support|Analysis|Making (MCDM)

🔗 Live Demo: <a href="https://mouradsidhoumi.github.io/promethee2/" target="_blank">https://mouradsidhoumi.github.io/promethee2/</a>

📘 If you understand _french_, <a href="https://pdfhost.io/v/9wScft4g5_Memoire_L3_Sidhoumi.pdf" target="_blank">here is a mini-thesis-like</a> that I did about this project 🎓.

---

### 🧭 Two case scenarios are covered in this readme for using the method :

- [I just want to know **how to use it** (express way ⚡).](#-how-to-use-it-)
- [I want understand **how it works** (with an intro to MCDM).](#-𝘉𝘳𝘪𝘦𝘧-ℑ𝔫𝔱𝔯𝔬𝔡𝔲𝔠𝔱𝔦𝔬𝔫-𝔱𝔬-𝔐𝔲𝔩𝔱𝔦-ℭ𝔯𝔦𝔱𝔢𝔯𝔦𝔞-𝔇𝔢𝔠𝔦𝔰𝔦𝔬𝔫-𝔐𝔞𝔎𝔦𝔫𝔤)

---
## 📜 𝘉𝘳𝘪𝘦𝘧 ℑ𝔫𝔱𝔯𝔬𝔡𝔲𝔠𝔱𝔦𝔬𝔫 𝔱𝔬 𝔐𝔲𝔩𝔱𝔦 ℭ𝔯𝔦𝔱𝔢𝔯𝔦𝔞 𝔇𝔢𝔠𝔦𝔰𝔦𝔬𝔫 𝔐𝔞𝔎𝔦𝔫𝔤:
As it says, ~ 𝕿𝖍𝖊 𝖍𝖆𝖗𝖉𝖊𝖘𝖙 ..𝖎𝖘 𝖙𝖔 𝖈𝖍𝖔𝖔𝖘𝖊 ~   
Decision support is a set of techniques and methods used during the decision-making process, when confronted to uncertainty, multiple & contradictory goals..
In the old days, it was based on consultant experience, historical analysis, mathematics such as statistical, optimization or probabilistic tools[⁽¹⁾](#-évolution-historique-de-laide-à-la-décision---aide-à-la-décision---wikipédia). With the development of computing, it progressed and became part of *operational research* and *business intelligence*.  
Desicion support include many methods each family depend on the approche as the number (big/limited) of decision-makers and alternatives(actions to choose from). Multi criteria desicion support|making|analysis is one of the approches, with limited number of decision-makers & alternatives which is the most common case.  

### Basic elements:
- *Action* : or alternative, one of the possible solutions for the treated problem, there are several types of actions, among them: real action which is executable, or imaginary action that is made idealist for the study[⁽²⁾](##-e-alnafie---fondement-de-la-décision---support-de-cours-master1-rsid).  
- *Criteria* : qualitative or quantitative expression that evaluates actions[⁽³⁾](#-alnafie-emdjed---vers-une-nouvelle-approche-pour-lélicitation-des-préférences-dans-la-méthodologie-multicritères-daide-à-la-décision---2016), it also can be a function, taking its values in a ordered set and representing the decision-maker's preferences according to a certain point of view[⁽⁴⁾](#-p-vincke-laide-multicritère-à-la-décision-édition-de-luniversité-de-bruxelles-bruxelles-1989).  
- *Objectives* : or goals, are what the decision-maker wants to optimize by using decision support, each one can be to maximize, minimize or to maintain in a certain state[⁽²⁾](#-e-alnafie---fondement-de-la-décision---support-de-cours-master1-rsid).  
- *Performance Matrix* : or evaluation matrix, is a 2-dimensional table "action×criteria" (or the reverse), each intersection represents the evaluation of action *i* in relation to criteria *j*.  

### Important concepts/notions:
- **Multi-criteria problem** : what has to be done [⁽⁵⁾](#-michel-grabisch-patrice-perny---agrégation-multicritère---12-mars-2002):  
    α - *Choice* : select the smallest possible set of "best actions".  
    β - *Sorting (classification)* : assign actions to predefined categories.  
    γ - *Ranking* : total or partial ordering of actions according to their relative qualities.  
    δ - *Description (scoring)* : describe the actions and their consequences in a formalized way.  

- **Aggregation of preferences** :   
    A crucial process, which allows to obtain information on the global preference between potential actions[⁽⁶⁾](#-lucien-yves-maystre-jacques-pictet-jean-simos---méthodes-multicritères-electre-description-conseils-pratiques-et-cas-dapplication-à-la-gestion-environnementale). Taking into account two operations:  
    - *Multi-criteria aggregation* : synthesize *n* values into a single one.
    - *Comparison* : compare two given performances[⁽²⁾](#-e-alnafie---fondement-de-la-décision---support-de-cours-master1-rsid).

    According to their order, two approaches follow from this, *"aggregate then compare"* & *"compare then aggregate"*, both generate different results and rise several methods.  

    What also takes part in the diversity of methods is the type of the multi-criteria aggregation, including: *total*, *partial* and *local iterative*.  

### PROMETHEE family:
***P**reference **R**anking **O**rganization **METH**ode for **E**nrichment of **E**valuations*  
Family of multi-criteria decision support methods. Characterizing six types of criteria; makes possible to define relations of outranking, indifference and incomparability between actions and to rank them from the best to the least good[⁽⁷⁾](#-optimisation-multicritère-de-la-fiabilité-application-du-modèle-de-goal-programming-avec-les-fonctions-de-satisfactions-dans-lindustrie-de-traitement-de-gaz-tel-00738462-v1). The basic elements of these methods were first proposed in 1982 by Professor Jean-Pierre Brans in Brussels[⁽⁸⁾](#--jp-brans-1982---lingénierie-de-la-décision-élaboration-dinstruments-daide-à-la-décision-la-méthode-promethee---presses-de-luniversité-laval). These methods are popular and there are several variants of them (at least five). They have been used successfully in many decision-making contexts around the world. A non-exhaustive list of scientific publications on extensions, applications and discussions related to the PROMETHEE methods has been published[⁽⁹⁾](#-m-behzadian-r-b-kazemzadeh-a-albadvi-et-m-aghdasi---promethee-a-comprehensive-literature-review-on-methodologies-and-applications---european-journal-of-operational-research-2010).  

### PROMETHEE Ⅱ method:
Give a *total order* of the potential actions (solves ranking problem γ), using the *"compare then aggregate"* approach, with *partial aggregation*.  
post-script : PROMETHEE Ⅰ arranges actions to a partial order and accepting incomparability relation[⁽¹⁰⁾](#-taibi-boumedyen---lanalyse-multicritère-comme-outil-daide-à-la-décision-application-de-la-méthode-promethee).  

---
<u>ℹ</u>: Here, to assimilate better and avoid repetition, I'm gona break the sequencing of this reading by bringing the usage of the PROMETHEE Ⅱ demo webapp, with abstraction of how it works under the hood, which we will come back to it after.

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

[⬆ Go to the top](#promethee-ii---a-method-of-multi-criteria-decision-supportanalysismaking-mcdm)

---
## Prefrence Fuctions :  
Allows to personalize the prefrence of an action over an other according their diffrence on the criteria.  
***d*** : diffrence.   
𝑷 = ***f(d)***  : *prefrence* (function).  
***q*** : indifference threshold.  
***p*** : prefrence threshold.  

For d the diffrence between actions pair (A𝒊, A𝒋) *(not the reverse)* on an criteria, if:  
- d ≤ 0 or d < q ⇔ P = 0 : action 𝒊 is *indifferent* to action 𝒋.  
- q < d << p ⇔ P ≈ 0 : A𝒊 is *weakly preferred* over A𝒋.  
- q << d < p ⇔ P ≈ 1 : A𝒊 is *strongly preferred* over A𝒋.  
- p < d ⇔ P = 1 : A𝒊 is *absolutely(or strictly) preferred* over A𝒋.  [⁽¹⁰⁾](#-taibi-boumedyen---lanalyse-multicritère-comme-outil-daide-à-la-décision-application-de-la-méthode-promethee)

Here are the 6 types (you can determine **d** and 𝑷 from the graphs, comments on the right):[⁽¹¹⁾](#-farouk-aissanou---décisions-multicritères-dans-les-réseaux-de-télécommunications-autonomes---institut-national-des-télécommunications-2012)
<table>
    <tr>
        <td>
            <center>Type 1: Usual</center>
            <br/>
            <img style="min-width:190px;width:190px" src="https://images2.imgbox.com/02/dd/sVL4ucmu_o.png" alt="graph1"/>
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
        • Good for real numbers measured on a continuous scale, where the gap values are possible.<br/>
        <img src="https://latex.codecogs.com/png.latex?%5Cbg_white%20f%28d%29%3D%20%5Cfrac%7Bd%7D%7Bp%7D%20%5Cquad%20%5Ctext%7Bwhen%7D%20%5Cquad%20d%3Cp"/>
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
        • This type includes types 1, 2 and 3.<br/>
        <img src="https://latex.codecogs.com/png.latex?%5Cbg_white%20f%28d%29%3D%20%5Cfrac%7Bd-q%7D%7Bp-q%7D%20%5Cquad%20%5Ctext%7Bwhen%20%7D%20%5Cquad%20q%3Cd%3Cp"/>
        </td>
    </tr>
    <tr>
        <td>
        <center>Type 6: Gaussian</center>
        <br/>
        <img style="width:175px" src="https://images2.imgbox.com/d1/01/43buDmp7_o.png" alt="graph6"/>
        </td>
        <td>
        • The <i>standard deviation</i> <b>σ</b><i>(sigma)</i> (also called <i>gaussian threshold <b>S</b></i>) is to define (it is the position of the inflexion point of the preference function curve), it is recommended to choose <b>q</b> & <b>p</b> first then set it between (or just their average, the ideal value corresponds to a weak preference degree of 0.39).<br/>
        • Compared to type 3 (or type 5 with <b>q</b>=0, so no flat indiffrence area), the prefrence is more nearby <b>p</b> (after <b>σ</b>) and is less nearby <b>q</b> (before <b>σ</b>), and it grows continuously not lineraly.⁽¹²⁾<br/>
        <img src="https://latex.codecogs.com/png.latex?%5Cbg_white%20f%28d%29%3D1-%5Cexp%5Cleft%20%5B%20-%5Cfrac%7Bd%5E2%7D%7B2%5Csigma%20%5E2%7D%20%5Cright%20%5D"/>
        </td>
    </tr>
</table>

🚧 In the demo website, the gaussian type will be added soon.

---
## ⚙ PROMETHEE II Process : [missing formulas 🏗🛠]

After having all data (covered in how to use it) here is how it works:  

![](https://latex.codecogs.com/png.latex?%5Cbg_white%20%5Cbegin%7Balign*%7D%20%5Ctexttt%7BActions%3A%7D%5Cquad%20%28a_%7B1%7D%2Ca_%7B2%7D%2C..%5Cquad%20a_%7Bi%7D%2C..%5Cquad%20a_%7Bn%7D%29%5C%5C%20%5Ctexttt%7BCriterias%3A%7D%5Cquad%20%28c_%7B1%7D%2Cc_%7B2%7D%2C..%5Cquad%20c_%7Bk%7D%2C..%5Cquad%20c_%7Bm%7D%29%5C%5C%20x_%7Bik%7D%3A%20%5Cquad%20%28a_%7Bi%7D%2Cc_%7Bk%7D%29%5Ctexttt%7B%20evaluation%7D%20%5Cend%7Balign*%7D)

**Step 0 (optionnal):** Normalize the action⨯criteria evaluations and criterias weights, making the values concise, between 0 & 1 (with the consideration of the criteria if it is to maximize or minimize, which reverse values in the second case).  
![](https://latex.codecogs.com/png.download?%5Cbg_white%20%5Cbegin%7Balign*%7D%20x_%7Bik%7D%5E%7B%27%7D%20%3D%20%5Cfrac%7Bx_%7Bik%7D%20-%20Min%5Cleft%28x_%7Bk%7D%5Cright%29%7D%7BMax%5Cleft%28x_%7Bk%7D%5Cright%29%20-%20Min%5Cleft%28x_%7Bk%7D%5Cright%29%7D%20%5Cquad%20%26%5Ctext%7B%20For%20beneficial%20criteria%20%7D%20c_k%20%5C%5C%5C%5C%20x_%7Bik%7D%5E%7B%27%7D%20%3D%20%5Cfrac%7BMax%5Cleft%28x_%7Bk%7D%5Cright%29%20-%20x_%7Bik%7D%7D%7BMax%5Cleft%28x_%7Bk%7D%5Cright%29%20-%20Min%5Cleft%28x_%7Bk%7D%5Cright%29%7D%20%5Cquad%20%26%5Ctext%7B%20For%20disadvantageous%20criteria%20%7D%20c_k%20%5Cend%7Balign*%7D%5C%5C%20x_%7Bik%7D%5E%7B%27%7D%20%5Ctext%7B%20%3A%20the%20normalized%20value%20of%20%7D%20%28a_i%2C%20c_k%29%5C%5C%5C%5C%20Min%28x_%7Bk%7D%29%20%5Ctext%7B%20is%20the%20minimal%20value%20of%20all%20action%20evaluation%20on%20the%20criteria%20%5Ctextit%7Bk%7D%20%7D) [⁽¹³⁾](#-nivetha-martin---promethee-method---rest-society-for-research-international---youtube--this-one-is-a-video-that-helps-a-lot-to-understand-easly)

**Step 1:** In a new matrix, calculate for every action ordered pair, the diffrence between each of their criterias evaluations.  
<p align="center">
  <img src="https://latex.codecogs.com/png.latex?%5Cbg_white%20%7Bd%5E%7Bk%7D%7D_%7Bij%7D%20%3D%20x_%7Bik%7D%20-%20x_%7Bjk%7D%20%5Cquad%20%28i%5Cneq%20j%29">
</p>

[⁽¹⁴⁾](#)

**Step 2:** Apply prefrence function on diffrences values according to each criteria pref. func, here we get a matrix that is called prefrence degrees.  
<p align="center">
<img src="https://latex.codecogs.com/png.latex?%7BP%5E%7Bk%7D%7D_%7Bij%7D%20%3D%20f_k%28%7Bd%5E%7Bk%7D%7D_%7Bij%7D%29%5C%5C%5C%5C"/>
</p>

**Step 3:** Sum for every action ordered pair: the respectives prefrence degrees, each one multiplied by its weight criteria (if you didn't do *step 0* then devide each result on sum of weights). Here we get prefrence indexes ![](https://latex.codecogs.com/png.download?%5Cdpi%7B120%7D%20%5Cbg_white%20%5Cpi).   
<p align="center">
<img src="https://latex.codecogs.com/gif.latex?%5Cpi_%7Bij%7D%20%3D%20%5Csum_%7Bk%3D1%7D%5E%7Bm%7D%20%5Cleft%20%28%20w_k%20%5Ctimes%20%7BP%5E%7Bk%7D%7D_%7Bij%7D%20%5Cright%20%29%20%5Cquad%20%28i%5Cneq%20j%29"/>
</p>

![](https://latex.codecogs.com/png.latex?\bg_white&space;\pi_{ij}) = 0 ⇔ action 𝒊 is indifferent to action 𝒋 for all criterias. 
![](https://latex.codecogs.com/png.latex?\bg_white&space;\pi_{ij}) = 1 ⇔ action 𝒊 is absolutely preferred over action 𝒋 for all criterias.[⁽¹⁴⁾](#-hela-moalla-frikha-habib-chabchoub-jean-marc-martel---inférence-des-coefficients-dimportance-relative-des-critères-dans-promethee-ii-2008-008---université-laval)   

**Step 4:**
- Sum each action ordered pair**s** that starts with the same action. Here we get for every action a positive outranking flow. The positive flow of action 𝒊 : ![](https://latex.codecogs.com/png.latex?%5Cdpi%7B120%7D%20%5Cbg_white%20%5Cphi_i%5E&plus;) represents the superiority of action 𝒊 over the *n-1* other actions.
<p align="center">
  <img src="https://latex.codecogs.com/png.latex?%5Cdpi%7B120%7D%20%5Cbg_white%20%5Cphi_i%5E&plus;%20%3D%20%5Csum_%7B%5Csubstack%7Bj%3D1%20%5C%5C%20i%20%5Cneq%20j%7D%7D%5Er%20%5Cpi_%7Bij%7D">
</p>

- Sum each action ordered pair**s** that ends with the same action. Here we get for every action a negative outranking flow. The negative flow of action 𝒊 : ![](https://latex.codecogs.com/png.latex?%5Cdpi%7B120%7D%20%5Cbg_white%20%5Cphi_%7Bi%7D%5E%7B-%7D) represents the weakness of action 𝒊 over the *n-1* other actions[⁽¹⁵⁾](#-hela-moalla-frikha-habib-chabchoub-jean-marc-martel---une-approche-interactive-pour-la-détermination-des-seuils-dindifférence-dans-promethee-2007-013---université-laval).  
<p align="center">
  <img src="https://latex.codecogs.com/png.latex?%5Cdpi%7B120%7D%20%5Cbg_white%20%5Cphi_i%5E-%20%3D%20%5Csum_%7B%5Csubstack%7Bj%3D1%20%5C%5C%20i%20%5Cneq%20j%7D%7D%5Er%20%5Cpi_%7Bji%7D">
</p>

- (optionnal: devide each flow on the number of actions - 1)

**Step 5:** For every action subtract their negative flow from positive flow, we get the net flows.
<p align="center">
  <img src="https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20%5Cbg_white%20%5CPhi_i%20%3D%20%5Cphi_i%5E&plus;%20-%20%5Cphi_i%5E-">
</p>

**Step 6** Sort the net flows from biggest to smallest. Here we get the final ranking with PROMETHEE II method!🎉👏  

🎦 If you still don't get it here is a Ytb video to get done with it: https://youtu.be/dPQgOX45I_I 🍿🎞

---
## 🎰 Advantages and disadvantages of the Promethee method:🩺
Soon 🚧🏗🛠

---
# 📚 Bibliography:🧬🔍

###### ⁽¹⁾ Évolution historique de l'aide à la décision - Aide à la décision - Wikipédia
###### ⁽²⁾ E. ALNAFIE - Fondement de la décision - Support de cours master1 RSID
###### ⁽³⁾ ALNAFIE Emdjed - Vers une nouvelle approche pour l’élicitation des préférences dans la méthodologie multicritères d’aide à la décision - 2016.
###### ⁽⁴⁾ P. VINCKE, "L’aide multicritère à la décision", Édition de l’Université de Bruxelles, Bruxelles, 1989
###### ⁽⁵⁾ Michel Grabisch, Patrice Perny - Agrégation Multicritère - 12 mars 2002
###### ⁽⁶⁾ Lucien Yves Maystre, Jacques Pictet, Jean Simos - Méthodes multicritères ELECTRE: description, conseils pratiques et cas d'application à la gestion environnementale
###### ⁽⁷⁾ Optimisation multicritère de la fiabilité: Application du modèle de goal programming avec les fonctions de satisfactions dans l’industrie de traitement de gaz (tel-00738462, v1)
###### ⁽⁸⁾  J.P. Brans (1982) - L'ingénierie de la décision: élaboration d'instruments d'aide à la décision «La méthode PROMETHEE» - Presses de l’Université Laval
###### ⁽⁹⁾ M. Behzadian, R. B. Kazemzadeh, A. Albadvi et M. Aghdasi - PROMETHEE: A comprehensive literature review on methodologies and applications - European Journal of Operational Research 2010
###### ⁽¹⁰⁾ TAIBI BOUMEDYEN - L'analyse Multicritère comme outil d'aide à la décision: Application de la méthode PROMETHEE
###### ⁽¹¹⁾ Farouk Aissanou - Décisions multicritères dans les réseaux de télécommunications autonomes - Institut National des Télécommunications, 2012
###### ⁽¹²⁾ Bertrand Mareschal - Preference functions and thresholds, June 14, 2018
###### ⁽¹³⁾📌 Nivetha Martin - PROMETHEE Method - REST Society for Research International - Youtube 💚 (this one is a video that helps a lot to understand easly)
###### ⁽¹⁴⁾ Hela Moalla FRIKHA, Habib CHABCHOUB, Jean-Marc MARTEL - Inférence des coefficients d’importance relative des critères dans Promethee II, 2008 008 - Université Laval.
###### ⁽¹⁵⁾ Hela Moalla FRIKHA, Habib CHABCHOUB, Jean-Marc MARTEL - Une approche interactive pour la détermination des seuils d’indifférence dans Promethee, 2007 013 - Université Laval
<!-- 
12 #-bertrand-mareschal---preference-functions-and-thresholds-june-14-2018
###### ⁽¹⁶⁾
###### ⁽¹⁷⁾
###### ⁽¹⁸⁾
###### ⁽¹⁹⁾
###### ⁽²⁰⁾
-->
---
[⬆ Go to the top 🚀](#promethee-ii---a-method-of-multi-criteria-decision-supportanalysismaking-mcdm)
