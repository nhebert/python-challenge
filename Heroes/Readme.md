

```python
#import the necessary libraries
import os
import pandas as pd
import numpy as np
import json
```


```python
filepath = os.path.join("purchase_data.json")
```


```python
Heroes = pd.read_json(filepath)
```


```python
display(Heroes.head(5))
```


<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Age</th>
      <th>Gender</th>
      <th>Item ID</th>
      <th>Item Name</th>
      <th>Price</th>
      <th>SN</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>38</td>
      <td>Male</td>
      <td>165</td>
      <td>Bone Crushing Silver Skewer</td>
      <td>3.37</td>
      <td>Aelalis34</td>
    </tr>
    <tr>
      <th>1</th>
      <td>21</td>
      <td>Male</td>
      <td>119</td>
      <td>Stormbringer, Dark Blade of Ending Misery</td>
      <td>2.32</td>
      <td>Eolo46</td>
    </tr>
    <tr>
      <th>2</th>
      <td>34</td>
      <td>Male</td>
      <td>174</td>
      <td>Primitive Blade</td>
      <td>2.46</td>
      <td>Assastnya25</td>
    </tr>
    <tr>
      <th>3</th>
      <td>21</td>
      <td>Male</td>
      <td>92</td>
      <td>Final Critic</td>
      <td>1.36</td>
      <td>Pheusrical25</td>
    </tr>
    <tr>
      <th>4</th>
      <td>23</td>
      <td>Male</td>
      <td>63</td>
      <td>Stormfury Mace</td>
      <td>1.27</td>
      <td>Aela59</td>
    </tr>
  </tbody>
</table>
</div>



```python
display(Heroes.shape)
```


    (780, 6)



```python
#datatypes of the dataframe
Heroes.info()
```

    <class 'pandas.core.frame.DataFrame'>
    Int64Index: 780 entries, 0 to 779
    Data columns (total 6 columns):
    Age          780 non-null int64
    Gender       780 non-null object
    Item ID      780 non-null int64
    Item Name    780 non-null object
    Price        780 non-null float64
    SN           780 non-null object
    dtypes: float64(1), int64(2), object(3)
    memory usage: 42.7+ KB



```python
# Total Number of Players
Heroes['SN'].nunique()
```




    573




```python
pd.DataFrame({"Total Number of Players":Heroes['SN'].nunique()},index=[0]).style.set_properties(**{'background-color': 'ash','color': 'black','border-color': 'white'})
```




<style  type="text/css" >
    #T_ebfdb60c_54a9_11e8_a7dd_8c8590bb111frow0_col0 {
            background-color:  ash;
            color:  black;
            border-color:  white;
        }</style>  
<table id="T_ebfdb60c_54a9_11e8_a7dd_8c8590bb111f" > 
<thead>    <tr> 
        <th class="blank level0" ></th> 
        <th class="col_heading level0 col0" >Total Number of Players</th> 
    </tr></thead> 
<tbody>    <tr> 
        <th id="T_ebfdb60c_54a9_11e8_a7dd_8c8590bb111flevel0_row0" class="row_heading level0 row0" >0</th> 
        <td id="T_ebfdb60c_54a9_11e8_a7dd_8c8590bb111frow0_col0" class="data row0 col0" >573</td> 
    </tr></tbody> 
</table> 




```python
# Number of Unique Items
Heroes['Item ID'].nunique()
```




    183




```python
# Average Purchase Price
Heroes['Price'].mean()
```




    2.931192307692303




```python
# Total Number of Purchases
len(Heroes)
```




    780




```python
# Total Revenue
Heroes['Price'].sum()
```




    2286.33




```python
pd.DataFrame({"Number of Unique Items":df['Item ID'].nunique(),
  "Average Purchase Price":df['Price'].mean(),
 "Total Number of Purchases":len(df),
"Total Revenue":df['Price'].sum()},index=[0]).style.set_properties(**{'background-color': 'ash','color': 'black','border-color': 'white'})
```




<style  type="text/css" >
    #T_f8ea9378_54a9_11e8_b634_8c8590bb111frow0_col0 {
            background-color:  ash;
            color:  black;
            border-color:  white;
        }    #T_f8ea9378_54a9_11e8_b634_8c8590bb111frow0_col1 {
            background-color:  ash;
            color:  black;
            border-color:  white;
        }    #T_f8ea9378_54a9_11e8_b634_8c8590bb111frow0_col2 {
            background-color:  ash;
            color:  black;
            border-color:  white;
        }    #T_f8ea9378_54a9_11e8_b634_8c8590bb111frow0_col3 {
            background-color:  ash;
            color:  black;
            border-color:  white;
        }</style>  
<table id="T_f8ea9378_54a9_11e8_b634_8c8590bb111f" > 
<thead>    <tr> 
        <th class="blank level0" ></th> 
        <th class="col_heading level0 col0" >Average Purchase Price</th> 
        <th class="col_heading level0 col1" >Number of Unique Items</th> 
        <th class="col_heading level0 col2" >Total Number of Purchases</th> 
        <th class="col_heading level0 col3" >Total Revenue</th> 
    </tr></thead> 
<tbody>    <tr> 
        <th id="T_f8ea9378_54a9_11e8_b634_8c8590bb111flevel0_row0" class="row_heading level0 row0" >0</th> 
        <td id="T_f8ea9378_54a9_11e8_b634_8c8590bb111frow0_col0" class="data row0 col0" >2.93119</td> 
        <td id="T_f8ea9378_54a9_11e8_b634_8c8590bb111frow0_col1" class="data row0 col1" >183</td> 
        <td id="T_f8ea9378_54a9_11e8_b634_8c8590bb111frow0_col2" class="data row0 col2" >780</td> 
        <td id="T_f8ea9378_54a9_11e8_b634_8c8590bb111frow0_col3" class="data row0 col3" >2286.33</td> 
    </tr></tbody> 
</table> 




```python
# get all the duplicate rows
display(Heroes.loc[df.duplicated("SN",keep=False),:].sort_values("SN").head(10))
display(len(Heroes.loc[Heroes.duplicated("SN",keep=False),:]))
```


<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Age</th>
      <th>Gender</th>
      <th>Item ID</th>
      <th>Item Name</th>
      <th>Price</th>
      <th>SN</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>431</th>
      <td>37</td>
      <td>Male</td>
      <td>92</td>
      <td>Final Critic</td>
      <td>1.36</td>
      <td>Aduephos78</td>
    </tr>
    <tr>
      <th>308</th>
      <td>37</td>
      <td>Male</td>
      <td>79</td>
      <td>Alpha, Oath of Zeal</td>
      <td>2.88</td>
      <td>Aduephos78</td>
    </tr>
    <tr>
      <th>377</th>
      <td>37</td>
      <td>Male</td>
      <td>174</td>
      <td>Primitive Blade</td>
      <td>2.46</td>
      <td>Aduephos78</td>
    </tr>
    <tr>
      <th>647</th>
      <td>26</td>
      <td>Male</td>
      <td>156</td>
      <td>Soul-Forged Steel Shortsword</td>
      <td>1.16</td>
      <td>Aeduera68</td>
    </tr>
    <tr>
      <th>721</th>
      <td>26</td>
      <td>Male</td>
      <td>39</td>
      <td>Betrayal, Whisper of Grieving Widows</td>
      <td>2.35</td>
      <td>Aeduera68</td>
    </tr>
    <tr>
      <th>224</th>
      <td>26</td>
      <td>Male</td>
      <td>106</td>
      <td>Crying Steel Sickle</td>
      <td>2.29</td>
      <td>Aeduera68</td>
    </tr>
    <tr>
      <th>529</th>
      <td>38</td>
      <td>Male</td>
      <td>172</td>
      <td>Blade of the Grave</td>
      <td>1.69</td>
      <td>Aelalis34</td>
    </tr>
    <tr>
      <th>0</th>
      <td>38</td>
      <td>Male</td>
      <td>165</td>
      <td>Bone Crushing Silver Skewer</td>
      <td>3.37</td>
      <td>Aelalis34</td>
    </tr>
    <tr>
      <th>359</th>
      <td>20</td>
      <td>Male</td>
      <td>32</td>
      <td>Orenmir</td>
      <td>4.95</td>
      <td>Aeliriam77</td>
    </tr>
    <tr>
      <th>637</th>
      <td>20</td>
      <td>Male</td>
      <td>18</td>
      <td>Torchlight, Bond of Storms</td>
      <td>1.77</td>
      <td>Aeliriam77</td>
    </tr>
  </tbody>
</table>
</div>



    375



```python
# drop the duplicate SN rows 
Heroes_unique = df.drop_duplicates("SN", keep='first')
len(Heroes_unique)
```




    573




```python
pd.DataFrame({'Percentage of players' : Heroes_unique['Gender'].value_counts(normalize=True),
   'Total Count' : Heroes_unique['Gender'].value_counts()})
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Percentage of players</th>
      <th>Total Count</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Male</th>
      <td>0.811518</td>
      <td>465</td>
    </tr>
    <tr>
      <th>Female</th>
      <td>0.174520</td>
      <td>100</td>
    </tr>
    <tr>
      <th>Other / Non-Disclosed</th>
      <td>0.013962</td>
      <td>8</td>
    </tr>
  </tbody>
</table>
</div>




```python
summary_gender_purchasing = pd.DataFrame(Heroes.groupby('Gender').agg({'Price':[np.mean,np.sum],'Item ID':'count'}))
summary_gender_purchasing
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead tr th {
        text-align: left;
    }

    .dataframe thead tr:last-of-type th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr>
      <th></th>
      <th colspan="2" halign="left">Price</th>
      <th>Item ID</th>
    </tr>
    <tr>
      <th></th>
      <th>mean</th>
      <th>sum</th>
      <th>count</th>
    </tr>
    <tr>
      <th>Gender</th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Female</th>
      <td>2.815515</td>
      <td>382.91</td>
      <td>136</td>
    </tr>
    <tr>
      <th>Male</th>
      <td>2.950521</td>
      <td>1867.68</td>
      <td>633</td>
    </tr>
    <tr>
      <th>Other / Non-Disclosed</th>
      <td>3.249091</td>
      <td>35.74</td>
      <td>11</td>
    </tr>
  </tbody>
</table>
</div>




```python
test = pd.DataFrame({'days': [0,31,45,60]})
test['range'] = pd.cut(test.days, [0,30,60,90], right=False)
test

# right : Indicates whether the bins include the rightmost edge or not. If
# right == True (the default), then the bins [1,2,3,4] indicate
# (1,2], (2,3], (3,4]
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>days</th>
      <th>range</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>0</td>
      <td>[0, 30)</td>
    </tr>
    <tr>
      <th>1</th>
      <td>31</td>
      <td>[30, 60)</td>
    </tr>
    <tr>
      <th>2</th>
      <td>45</td>
      <td>[30, 60)</td>
    </tr>
    <tr>
      <th>3</th>
      <td>60</td>
      <td>[60, 90)</td>
    </tr>
  </tbody>
</table>
</div>




```python
bins = [0, 10, 15, 20, 25, 30, 35, 40, 100]
age_labels = ['<10', '10-14', '15-19', '20-24','25-29','30-34','35-39','40+']
Heroes['Age_Group'] = pd.cut(Heroes['Age'], bins ,labels = age_labels,right=False)
```


```python
sum_age = pd.DataFrame(df.groupby('Age_Group').agg({'Price':[np.mean,np.sum],'Item ID':'count'}))
```


```python
sum_age.style
```




<style  type="text/css" >
</style>  
<table id="T_357c298c_54aa_11e8_acf3_8c8590bb111f" > 
<thead>    <tr> 
        <th class="blank level0" ></th> 
        <th class="col_heading level0 col0" colspan=2>Price</th> 
        <th class="col_heading level0 col2" >Item ID</th> 
    </tr>    <tr> 
        <th class="blank level1" ></th> 
        <th class="col_heading level1 col0" >mean</th> 
        <th class="col_heading level1 col1" >sum</th> 
        <th class="col_heading level1 col2" >count</th> 
    </tr>    <tr> 
        <th class="index_name level0" >Age_Group</th> 
        <th class="blank" ></th> 
        <th class="blank" ></th> 
        <th class="blank" ></th> 
    </tr></thead> 
<tbody>    <tr> 
        <th id="T_357c298c_54aa_11e8_acf3_8c8590bb111flevel0_row0" class="row_heading level0 row0" ><10</th> 
        <td id="T_357c298c_54aa_11e8_acf3_8c8590bb111frow0_col0" class="data row0 col0" >2.98071</td> 
        <td id="T_357c298c_54aa_11e8_acf3_8c8590bb111frow0_col1" class="data row0 col1" >83.46</td> 
        <td id="T_357c298c_54aa_11e8_acf3_8c8590bb111frow0_col2" class="data row0 col2" >28</td> 
    </tr>    <tr> 
        <th id="T_357c298c_54aa_11e8_acf3_8c8590bb111flevel0_row1" class="row_heading level0 row1" >10-14</th> 
        <td id="T_357c298c_54aa_11e8_acf3_8c8590bb111frow1_col0" class="data row1 col0" >2.77</td> 
        <td id="T_357c298c_54aa_11e8_acf3_8c8590bb111frow1_col1" class="data row1 col1" >96.95</td> 
        <td id="T_357c298c_54aa_11e8_acf3_8c8590bb111frow1_col2" class="data row1 col2" >35</td> 
    </tr>    <tr> 
        <th id="T_357c298c_54aa_11e8_acf3_8c8590bb111flevel0_row2" class="row_heading level0 row2" >15-19</th> 
        <td id="T_357c298c_54aa_11e8_acf3_8c8590bb111frow2_col0" class="data row2 col0" >2.90541</td> 
        <td id="T_357c298c_54aa_11e8_acf3_8c8590bb111frow2_col1" class="data row2 col1" >386.42</td> 
        <td id="T_357c298c_54aa_11e8_acf3_8c8590bb111frow2_col2" class="data row2 col2" >133</td> 
    </tr>    <tr> 
        <th id="T_357c298c_54aa_11e8_acf3_8c8590bb111flevel0_row3" class="row_heading level0 row3" >20-24</th> 
        <td id="T_357c298c_54aa_11e8_acf3_8c8590bb111frow3_col0" class="data row3 col0" >2.91301</td> 
        <td id="T_357c298c_54aa_11e8_acf3_8c8590bb111frow3_col1" class="data row3 col1" >978.77</td> 
        <td id="T_357c298c_54aa_11e8_acf3_8c8590bb111frow3_col2" class="data row3 col2" >336</td> 
    </tr>    <tr> 
        <th id="T_357c298c_54aa_11e8_acf3_8c8590bb111flevel0_row4" class="row_heading level0 row4" >25-29</th> 
        <td id="T_357c298c_54aa_11e8_acf3_8c8590bb111frow4_col0" class="data row4 col0" >2.96264</td> 
        <td id="T_357c298c_54aa_11e8_acf3_8c8590bb111frow4_col1" class="data row4 col1" >370.33</td> 
        <td id="T_357c298c_54aa_11e8_acf3_8c8590bb111frow4_col2" class="data row4 col2" >125</td> 
    </tr>    <tr> 
        <th id="T_357c298c_54aa_11e8_acf3_8c8590bb111flevel0_row5" class="row_heading level0 row5" >30-34</th> 
        <td id="T_357c298c_54aa_11e8_acf3_8c8590bb111frow5_col0" class="data row5 col0" >3.08203</td> 
        <td id="T_357c298c_54aa_11e8_acf3_8c8590bb111frow5_col1" class="data row5 col1" >197.25</td> 
        <td id="T_357c298c_54aa_11e8_acf3_8c8590bb111frow5_col2" class="data row5 col2" >64</td> 
    </tr>    <tr> 
        <th id="T_357c298c_54aa_11e8_acf3_8c8590bb111flevel0_row6" class="row_heading level0 row6" >35-39</th> 
        <td id="T_357c298c_54aa_11e8_acf3_8c8590bb111frow6_col0" class="data row6 col0" >2.84286</td> 
        <td id="T_357c298c_54aa_11e8_acf3_8c8590bb111frow6_col1" class="data row6 col1" >119.4</td> 
        <td id="T_357c298c_54aa_11e8_acf3_8c8590bb111frow6_col2" class="data row6 col2" >42</td> 
    </tr>    <tr> 
        <th id="T_357c298c_54aa_11e8_acf3_8c8590bb111flevel0_row7" class="row_heading level0 row7" >40+</th> 
        <td id="T_357c298c_54aa_11e8_acf3_8c8590bb111frow7_col0" class="data row7 col0" >3.16176</td> 
        <td id="T_357c298c_54aa_11e8_acf3_8c8590bb111frow7_col1" class="data row7 col1" >53.75</td> 
        <td id="T_357c298c_54aa_11e8_acf3_8c8590bb111frow7_col2" class="data row7 col2" >17</td> 
    </tr></tbody> 
</table> 




```python
sum_spenders = pd.DataFrame(Heroes.groupby(['SN']).agg({'Price':[np.mean,np.sum],'Item ID':'count'}))
```


```python
sum_spenders.sort_values(('Price','sum'),ascending=False)[:5].style.set_properties(**{'background-color': 'white', 'color': 'black','border-color': 'white'})
```




<style  type="text/css" >
    #T_447b0890_54aa_11e8_9abc_8c8590bb111frow0_col0 {
            background-color:  white;
            color:  black;
            border-color:  white;
        }    #T_447b0890_54aa_11e8_9abc_8c8590bb111frow0_col1 {
            background-color:  white;
            color:  black;
            border-color:  white;
        }    #T_447b0890_54aa_11e8_9abc_8c8590bb111frow0_col2 {
            background-color:  white;
            color:  black;
            border-color:  white;
        }    #T_447b0890_54aa_11e8_9abc_8c8590bb111frow1_col0 {
            background-color:  white;
            color:  black;
            border-color:  white;
        }    #T_447b0890_54aa_11e8_9abc_8c8590bb111frow1_col1 {
            background-color:  white;
            color:  black;
            border-color:  white;
        }    #T_447b0890_54aa_11e8_9abc_8c8590bb111frow1_col2 {
            background-color:  white;
            color:  black;
            border-color:  white;
        }    #T_447b0890_54aa_11e8_9abc_8c8590bb111frow2_col0 {
            background-color:  white;
            color:  black;
            border-color:  white;
        }    #T_447b0890_54aa_11e8_9abc_8c8590bb111frow2_col1 {
            background-color:  white;
            color:  black;
            border-color:  white;
        }    #T_447b0890_54aa_11e8_9abc_8c8590bb111frow2_col2 {
            background-color:  white;
            color:  black;
            border-color:  white;
        }    #T_447b0890_54aa_11e8_9abc_8c8590bb111frow3_col0 {
            background-color:  white;
            color:  black;
            border-color:  white;
        }    #T_447b0890_54aa_11e8_9abc_8c8590bb111frow3_col1 {
            background-color:  white;
            color:  black;
            border-color:  white;
        }    #T_447b0890_54aa_11e8_9abc_8c8590bb111frow3_col2 {
            background-color:  white;
            color:  black;
            border-color:  white;
        }    #T_447b0890_54aa_11e8_9abc_8c8590bb111frow4_col0 {
            background-color:  white;
            color:  black;
            border-color:  white;
        }    #T_447b0890_54aa_11e8_9abc_8c8590bb111frow4_col1 {
            background-color:  white;
            color:  black;
            border-color:  white;
        }    #T_447b0890_54aa_11e8_9abc_8c8590bb111frow4_col2 {
            background-color:  white;
            color:  black;
            border-color:  white;
        }</style>  
<table id="T_447b0890_54aa_11e8_9abc_8c8590bb111f" > 
<thead>    <tr> 
        <th class="blank level0" ></th> 
        <th class="col_heading level0 col0" colspan=2>Price</th> 
        <th class="col_heading level0 col2" >Item ID</th> 
    </tr>    <tr> 
        <th class="blank level1" ></th> 
        <th class="col_heading level1 col0" >mean</th> 
        <th class="col_heading level1 col1" >sum</th> 
        <th class="col_heading level1 col2" >count</th> 
    </tr>    <tr> 
        <th class="index_name level0" >SN</th> 
        <th class="blank" ></th> 
        <th class="blank" ></th> 
        <th class="blank" ></th> 
    </tr></thead> 
<tbody>    <tr> 
        <th id="T_447b0890_54aa_11e8_9abc_8c8590bb111flevel0_row0" class="row_heading level0 row0" >Undirrala66</th> 
        <td id="T_447b0890_54aa_11e8_9abc_8c8590bb111frow0_col0" class="data row0 col0" >3.412</td> 
        <td id="T_447b0890_54aa_11e8_9abc_8c8590bb111frow0_col1" class="data row0 col1" >17.06</td> 
        <td id="T_447b0890_54aa_11e8_9abc_8c8590bb111frow0_col2" class="data row0 col2" >5</td> 
    </tr>    <tr> 
        <th id="T_447b0890_54aa_11e8_9abc_8c8590bb111flevel0_row1" class="row_heading level0 row1" >Saedue76</th> 
        <td id="T_447b0890_54aa_11e8_9abc_8c8590bb111frow1_col0" class="data row1 col0" >3.39</td> 
        <td id="T_447b0890_54aa_11e8_9abc_8c8590bb111frow1_col1" class="data row1 col1" >13.56</td> 
        <td id="T_447b0890_54aa_11e8_9abc_8c8590bb111frow1_col2" class="data row1 col2" >4</td> 
    </tr>    <tr> 
        <th id="T_447b0890_54aa_11e8_9abc_8c8590bb111flevel0_row2" class="row_heading level0 row2" >Mindimnya67</th> 
        <td id="T_447b0890_54aa_11e8_9abc_8c8590bb111frow2_col0" class="data row2 col0" >3.185</td> 
        <td id="T_447b0890_54aa_11e8_9abc_8c8590bb111frow2_col1" class="data row2 col1" >12.74</td> 
        <td id="T_447b0890_54aa_11e8_9abc_8c8590bb111frow2_col2" class="data row2 col2" >4</td> 
    </tr>    <tr> 
        <th id="T_447b0890_54aa_11e8_9abc_8c8590bb111flevel0_row3" class="row_heading level0 row3" >Haellysu29</th> 
        <td id="T_447b0890_54aa_11e8_9abc_8c8590bb111frow3_col0" class="data row3 col0" >4.24333</td> 
        <td id="T_447b0890_54aa_11e8_9abc_8c8590bb111frow3_col1" class="data row3 col1" >12.73</td> 
        <td id="T_447b0890_54aa_11e8_9abc_8c8590bb111frow3_col2" class="data row3 col2" >3</td> 
    </tr>    <tr> 
        <th id="T_447b0890_54aa_11e8_9abc_8c8590bb111flevel0_row4" class="row_heading level0 row4" >Eoda93</th> 
        <td id="T_447b0890_54aa_11e8_9abc_8c8590bb111frow4_col0" class="data row4 col0" >3.86</td> 
        <td id="T_447b0890_54aa_11e8_9abc_8c8590bb111frow4_col1" class="data row4 col1" >11.58</td> 
        <td id="T_447b0890_54aa_11e8_9abc_8c8590bb111frow4_col2" class="data row4 col2" >3</td> 
    </tr></tbody> 
</table> 




```python
summ_items = pd.DataFrame(Heroes.groupby(['Item ID','Item Name']).agg({'Price':[np.mean,np.sum],'Item ID':'count'}))
```


```python
sum_items.sort_values(('Item ID','count'),ascending=False)[0:5].style.set_properties(**{'background-color': 'white', 'color': 'black','border-color': 'white'})
```




<style  type="text/css" >
    #T_35dc5c9a_5495_11e8_8786_8c8590bb111frow0_col0 {
            background-color:  white;
            color:  black;
            border-color:  white;
        }    #T_35dc5c9a_5495_11e8_8786_8c8590bb111frow0_col1 {
            background-color:  white;
            color:  black;
            border-color:  white;
        }    #T_35dc5c9a_5495_11e8_8786_8c8590bb111frow0_col2 {
            background-color:  white;
            color:  black;
            border-color:  white;
        }    #T_35dc5c9a_5495_11e8_8786_8c8590bb111frow1_col0 {
            background-color:  white;
            color:  black;
            border-color:  white;
        }    #T_35dc5c9a_5495_11e8_8786_8c8590bb111frow1_col1 {
            background-color:  white;
            color:  black;
            border-color:  white;
        }    #T_35dc5c9a_5495_11e8_8786_8c8590bb111frow1_col2 {
            background-color:  white;
            color:  black;
            border-color:  white;
        }    #T_35dc5c9a_5495_11e8_8786_8c8590bb111frow2_col0 {
            background-color:  white;
            color:  black;
            border-color:  white;
        }    #T_35dc5c9a_5495_11e8_8786_8c8590bb111frow2_col1 {
            background-color:  white;
            color:  black;
            border-color:  white;
        }    #T_35dc5c9a_5495_11e8_8786_8c8590bb111frow2_col2 {
            background-color:  white;
            color:  black;
            border-color:  white;
        }    #T_35dc5c9a_5495_11e8_8786_8c8590bb111frow3_col0 {
            background-color:  white;
            color:  black;
            border-color:  white;
        }    #T_35dc5c9a_5495_11e8_8786_8c8590bb111frow3_col1 {
            background-color:  white;
            color:  black;
            border-color:  white;
        }    #T_35dc5c9a_5495_11e8_8786_8c8590bb111frow3_col2 {
            background-color:  white;
            color:  black;
            border-color:  white;
        }    #T_35dc5c9a_5495_11e8_8786_8c8590bb111frow4_col0 {
            background-color:  white;
            color:  black;
            border-color:  white;
        }    #T_35dc5c9a_5495_11e8_8786_8c8590bb111frow4_col1 {
            background-color:  white;
            color:  black;
            border-color:  white;
        }    #T_35dc5c9a_5495_11e8_8786_8c8590bb111frow4_col2 {
            background-color:  white;
            color:  black;
            border-color:  white;
        }</style>  
<table id="T_35dc5c9a_5495_11e8_8786_8c8590bb111f" > 
<thead>    <tr> 
        <th class="blank" ></th> 
        <th class="blank level0" ></th> 
        <th class="col_heading level0 col0" colspan=2>Price</th> 
        <th class="col_heading level0 col2" >Item ID</th> 
    </tr>    <tr> 
        <th class="blank" ></th> 
        <th class="blank level1" ></th> 
        <th class="col_heading level1 col0" >mean</th> 
        <th class="col_heading level1 col1" >sum</th> 
        <th class="col_heading level1 col2" >count</th> 
    </tr>    <tr> 
        <th class="index_name level0" >Item ID</th> 
        <th class="index_name level1" >Item Name</th> 
        <th class="blank" ></th> 
        <th class="blank" ></th> 
        <th class="blank" ></th> 
    </tr></thead> 
<tbody>    <tr> 
        <th id="T_35dc5c9a_5495_11e8_8786_8c8590bb111flevel0_row0" class="row_heading level0 row0" >39</th> 
        <th id="T_35dc5c9a_5495_11e8_8786_8c8590bb111flevel1_row0" class="row_heading level1 row0" >Betrayal, Whisper of Grieving Widows</th> 
        <td id="T_35dc5c9a_5495_11e8_8786_8c8590bb111frow0_col0" class="data row0 col0" >2.35</td> 
        <td id="T_35dc5c9a_5495_11e8_8786_8c8590bb111frow0_col1" class="data row0 col1" >25.85</td> 
        <td id="T_35dc5c9a_5495_11e8_8786_8c8590bb111frow0_col2" class="data row0 col2" >11</td> 
    </tr>    <tr> 
        <th id="T_35dc5c9a_5495_11e8_8786_8c8590bb111flevel0_row1" class="row_heading level0 row1" >84</th> 
        <th id="T_35dc5c9a_5495_11e8_8786_8c8590bb111flevel1_row1" class="row_heading level1 row1" >Arcane Gem</th> 
        <td id="T_35dc5c9a_5495_11e8_8786_8c8590bb111frow1_col0" class="data row1 col0" >2.23</td> 
        <td id="T_35dc5c9a_5495_11e8_8786_8c8590bb111frow1_col1" class="data row1 col1" >24.53</td> 
        <td id="T_35dc5c9a_5495_11e8_8786_8c8590bb111frow1_col2" class="data row1 col2" >11</td> 
    </tr>    <tr> 
        <th id="T_35dc5c9a_5495_11e8_8786_8c8590bb111flevel0_row2" class="row_heading level0 row2" >31</th> 
        <th id="T_35dc5c9a_5495_11e8_8786_8c8590bb111flevel1_row2" class="row_heading level1 row2" >Trickster</th> 
        <td id="T_35dc5c9a_5495_11e8_8786_8c8590bb111frow2_col0" class="data row2 col0" >2.07</td> 
        <td id="T_35dc5c9a_5495_11e8_8786_8c8590bb111frow2_col1" class="data row2 col1" >18.63</td> 
        <td id="T_35dc5c9a_5495_11e8_8786_8c8590bb111frow2_col2" class="data row2 col2" >9</td> 
    </tr>    <tr> 
        <th id="T_35dc5c9a_5495_11e8_8786_8c8590bb111flevel0_row3" class="row_heading level0 row3" >175</th> 
        <th id="T_35dc5c9a_5495_11e8_8786_8c8590bb111flevel1_row3" class="row_heading level1 row3" >Woeful Adamantite Claymore</th> 
        <td id="T_35dc5c9a_5495_11e8_8786_8c8590bb111frow3_col0" class="data row3 col0" >1.24</td> 
        <td id="T_35dc5c9a_5495_11e8_8786_8c8590bb111frow3_col1" class="data row3 col1" >11.16</td> 
        <td id="T_35dc5c9a_5495_11e8_8786_8c8590bb111frow3_col2" class="data row3 col2" >9</td> 
    </tr>    <tr> 
        <th id="T_35dc5c9a_5495_11e8_8786_8c8590bb111flevel0_row4" class="row_heading level0 row4" >13</th> 
        <th id="T_35dc5c9a_5495_11e8_8786_8c8590bb111flevel1_row4" class="row_heading level1 row4" >Serenity</th> 
        <td id="T_35dc5c9a_5495_11e8_8786_8c8590bb111frow4_col0" class="data row4 col0" >1.49</td> 
        <td id="T_35dc5c9a_5495_11e8_8786_8c8590bb111frow4_col1" class="data row4 col1" >13.41</td> 
        <td id="T_35dc5c9a_5495_11e8_8786_8c8590bb111frow4_col2" class="data row4 col2" >9</td> 
    </tr></tbody> 
</table> 




```python
sum_items = pd.DataFrame(Heroes.groupby(['Item ID','Item Name']).agg({'Price':[np.mean,np.sum],'Item ID':'count'}))

```


```python
sum_items.sort_values(('Price','sum'),ascending=False)[0:5].style.set_properties(**{'background-color': 'white', 'color': 'black','border-color': 'white'})
```




<style  type="text/css" >
    #T_5cf4965c_54aa_11e8_9b3d_8c8590bb111frow0_col0 {
            background-color:  white;
            color:  black;
            border-color:  white;
        }    #T_5cf4965c_54aa_11e8_9b3d_8c8590bb111frow0_col1 {
            background-color:  white;
            color:  black;
            border-color:  white;
        }    #T_5cf4965c_54aa_11e8_9b3d_8c8590bb111frow0_col2 {
            background-color:  white;
            color:  black;
            border-color:  white;
        }    #T_5cf4965c_54aa_11e8_9b3d_8c8590bb111frow1_col0 {
            background-color:  white;
            color:  black;
            border-color:  white;
        }    #T_5cf4965c_54aa_11e8_9b3d_8c8590bb111frow1_col1 {
            background-color:  white;
            color:  black;
            border-color:  white;
        }    #T_5cf4965c_54aa_11e8_9b3d_8c8590bb111frow1_col2 {
            background-color:  white;
            color:  black;
            border-color:  white;
        }    #T_5cf4965c_54aa_11e8_9b3d_8c8590bb111frow2_col0 {
            background-color:  white;
            color:  black;
            border-color:  white;
        }    #T_5cf4965c_54aa_11e8_9b3d_8c8590bb111frow2_col1 {
            background-color:  white;
            color:  black;
            border-color:  white;
        }    #T_5cf4965c_54aa_11e8_9b3d_8c8590bb111frow2_col2 {
            background-color:  white;
            color:  black;
            border-color:  white;
        }    #T_5cf4965c_54aa_11e8_9b3d_8c8590bb111frow3_col0 {
            background-color:  white;
            color:  black;
            border-color:  white;
        }    #T_5cf4965c_54aa_11e8_9b3d_8c8590bb111frow3_col1 {
            background-color:  white;
            color:  black;
            border-color:  white;
        }    #T_5cf4965c_54aa_11e8_9b3d_8c8590bb111frow3_col2 {
            background-color:  white;
            color:  black;
            border-color:  white;
        }    #T_5cf4965c_54aa_11e8_9b3d_8c8590bb111frow4_col0 {
            background-color:  white;
            color:  black;
            border-color:  white;
        }    #T_5cf4965c_54aa_11e8_9b3d_8c8590bb111frow4_col1 {
            background-color:  white;
            color:  black;
            border-color:  white;
        }    #T_5cf4965c_54aa_11e8_9b3d_8c8590bb111frow4_col2 {
            background-color:  white;
            color:  black;
            border-color:  white;
        }</style>  
<table id="T_5cf4965c_54aa_11e8_9b3d_8c8590bb111f" > 
<thead>    <tr> 
        <th class="blank" ></th> 
        <th class="blank level0" ></th> 
        <th class="col_heading level0 col0" colspan=2>Price</th> 
        <th class="col_heading level0 col2" >Item ID</th> 
    </tr>    <tr> 
        <th class="blank" ></th> 
        <th class="blank level1" ></th> 
        <th class="col_heading level1 col0" >mean</th> 
        <th class="col_heading level1 col1" >sum</th> 
        <th class="col_heading level1 col2" >count</th> 
    </tr>    <tr> 
        <th class="index_name level0" >Item ID</th> 
        <th class="index_name level1" >Item Name</th> 
        <th class="blank" ></th> 
        <th class="blank" ></th> 
        <th class="blank" ></th> 
    </tr></thead> 
<tbody>    <tr> 
        <th id="T_5cf4965c_54aa_11e8_9b3d_8c8590bb111flevel0_row0" class="row_heading level0 row0" >34</th> 
        <th id="T_5cf4965c_54aa_11e8_9b3d_8c8590bb111flevel1_row0" class="row_heading level1 row0" >Retribution Axe</th> 
        <td id="T_5cf4965c_54aa_11e8_9b3d_8c8590bb111frow0_col0" class="data row0 col0" >4.14</td> 
        <td id="T_5cf4965c_54aa_11e8_9b3d_8c8590bb111frow0_col1" class="data row0 col1" >37.26</td> 
        <td id="T_5cf4965c_54aa_11e8_9b3d_8c8590bb111frow0_col2" class="data row0 col2" >9</td> 
    </tr>    <tr> 
        <th id="T_5cf4965c_54aa_11e8_9b3d_8c8590bb111flevel0_row1" class="row_heading level0 row1" >115</th> 
        <th id="T_5cf4965c_54aa_11e8_9b3d_8c8590bb111flevel1_row1" class="row_heading level1 row1" >Spectral Diamond Doomblade</th> 
        <td id="T_5cf4965c_54aa_11e8_9b3d_8c8590bb111frow1_col0" class="data row1 col0" >4.25</td> 
        <td id="T_5cf4965c_54aa_11e8_9b3d_8c8590bb111frow1_col1" class="data row1 col1" >29.75</td> 
        <td id="T_5cf4965c_54aa_11e8_9b3d_8c8590bb111frow1_col2" class="data row1 col2" >7</td> 
    </tr>    <tr> 
        <th id="T_5cf4965c_54aa_11e8_9b3d_8c8590bb111flevel0_row2" class="row_heading level0 row2" >32</th> 
        <th id="T_5cf4965c_54aa_11e8_9b3d_8c8590bb111flevel1_row2" class="row_heading level1 row2" >Orenmir</th> 
        <td id="T_5cf4965c_54aa_11e8_9b3d_8c8590bb111frow2_col0" class="data row2 col0" >4.95</td> 
        <td id="T_5cf4965c_54aa_11e8_9b3d_8c8590bb111frow2_col1" class="data row2 col1" >29.7</td> 
        <td id="T_5cf4965c_54aa_11e8_9b3d_8c8590bb111frow2_col2" class="data row2 col2" >6</td> 
    </tr>    <tr> 
        <th id="T_5cf4965c_54aa_11e8_9b3d_8c8590bb111flevel0_row3" class="row_heading level0 row3" >103</th> 
        <th id="T_5cf4965c_54aa_11e8_9b3d_8c8590bb111flevel1_row3" class="row_heading level1 row3" >Singed Scalpel</th> 
        <td id="T_5cf4965c_54aa_11e8_9b3d_8c8590bb111frow3_col0" class="data row3 col0" >4.87</td> 
        <td id="T_5cf4965c_54aa_11e8_9b3d_8c8590bb111frow3_col1" class="data row3 col1" >29.22</td> 
        <td id="T_5cf4965c_54aa_11e8_9b3d_8c8590bb111frow3_col2" class="data row3 col2" >6</td> 
    </tr>    <tr> 
        <th id="T_5cf4965c_54aa_11e8_9b3d_8c8590bb111flevel0_row4" class="row_heading level0 row4" >107</th> 
        <th id="T_5cf4965c_54aa_11e8_9b3d_8c8590bb111flevel1_row4" class="row_heading level1 row4" >Splitter, Foe Of Subtlety</th> 
        <td id="T_5cf4965c_54aa_11e8_9b3d_8c8590bb111frow4_col0" class="data row4 col0" >3.61</td> 
        <td id="T_5cf4965c_54aa_11e8_9b3d_8c8590bb111frow4_col1" class="data row4 col1" >28.88</td> 
        <td id="T_5cf4965c_54aa_11e8_9b3d_8c8590bb111frow4_col2" class="data row4 col2" >8</td> 
    </tr></tbody> 
</table> 




```python
#Observations
#While more men made more purchases than women, the company could re-evaluate whether this is because women spend less, or (more likely) because the items offered for sale follow a trend that appeals more to men.  Maybe they could come up with new items (or new sellable game features) targeting these women players.

# While it appears that the older consumers spend more money on the high value items, the company could come up with a strategy to take better advantage of this trend and see if they can boost this number towards a mean of $4 or higher.  I find it extremely likely that if they would spend $3 per item, these consumers would spend more if the options were available.

# The primary demographic for the game is Male between the ages of 20 to 24, and they spend the most money as well.
```
