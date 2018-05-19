

```python
# import relevant dependencies
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import os
```


```python
print(plt.style.available)
```

    ['seaborn-dark', 'seaborn-darkgrid', 'seaborn-ticks', 'fivethirtyeight', 'seaborn-whitegrid', 'classic', '_classic_test', 'fast', 'seaborn-talk', 'seaborn-dark-palette', 'seaborn-bright', 'seaborn-pastel', 'grayscale', 'seaborn-notebook', 'ggplot', 'seaborn-colorblind', 'seaborn-muted', 'seaborn', 'Solarize_Light2', 'seaborn-paper', 'bmh', 'seaborn-white', 'dark_background', 'seaborn-poster', 'seaborn-deep']



```python
# assign file paths to the datasets
filepath_city = os.path.join("city_data.csv")
filepath_ride = os.path.join("ride_data.csv")
```


```python
# load the datasets to dataframes
df_city = pd.read_csv(filepath_city)
df_ride = pd.read_csv(filepath_ride)
```


```python
# inspect the dataframes
display(df_city.head())
display(df_city.shape)
display(df_city.info())
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
      <th>city</th>
      <th>driver_count</th>
      <th>type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Kelseyland</td>
      <td>63</td>
      <td>Urban</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Nguyenbury</td>
      <td>8</td>
      <td>Urban</td>
    </tr>
    <tr>
      <th>2</th>
      <td>East Douglas</td>
      <td>12</td>
      <td>Urban</td>
    </tr>
    <tr>
      <th>3</th>
      <td>West Dawnfurt</td>
      <td>34</td>
      <td>Urban</td>
    </tr>
    <tr>
      <th>4</th>
      <td>Rodriguezburgh</td>
      <td>52</td>
      <td>Urban</td>
    </tr>
  </tbody>
</table>
</div>



    (126, 3)


    <class 'pandas.core.frame.DataFrame'>
    RangeIndex: 126 entries, 0 to 125
    Data columns (total 3 columns):
    city            126 non-null object
    driver_count    126 non-null int64
    type            126 non-null object
    dtypes: int64(1), object(2)
    memory usage: 3.0+ KB



    None



```python
# inspect the dataframes
display(df_ride.head())
display(df_ride.shape)
display(df_ride.info())
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
      <th>city</th>
      <th>date</th>
      <th>fare</th>
      <th>ride_id</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Sarabury</td>
      <td>2016-01-16 13:49:27</td>
      <td>38.35</td>
      <td>5403689035038</td>
    </tr>
    <tr>
      <th>1</th>
      <td>South Roy</td>
      <td>2016-01-02 18:42:34</td>
      <td>17.49</td>
      <td>4036272335942</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Wiseborough</td>
      <td>2016-01-21 17:35:29</td>
      <td>44.18</td>
      <td>3645042422587</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Spencertown</td>
      <td>2016-07-31 14:53:22</td>
      <td>6.87</td>
      <td>2242596575892</td>
    </tr>
    <tr>
      <th>4</th>
      <td>Nguyenbury</td>
      <td>2016-07-09 04:42:44</td>
      <td>6.28</td>
      <td>1543057793673</td>
    </tr>
  </tbody>
</table>
</div>



    (2375, 4)


    <class 'pandas.core.frame.DataFrame'>
    RangeIndex: 2375 entries, 0 to 2374
    Data columns (total 4 columns):
    city       2375 non-null object
    date       2375 non-null object
    fare       2375 non-null float64
    ride_id    2375 non-null int64
    dtypes: float64(1), int64(1), object(2)
    memory usage: 74.3+ KB



    None



```python
# There is information on 125 unique cities in both the datasets
display(df_city['city'].nunique())
```


    125



    125



```python
# construct the dataframes
df1 = df_city.groupby(['city','type']).agg({'driver_count':np.sum}).reset_index()
df2 = df_ride.groupby('city').agg({'fare':np.mean}).reset_index()
df3 = df_ride.groupby('city').agg({'ride_id':'count'}).reset_index()

# merge the dataframe
df = pd.merge(df1,df2,how='outer',on='city')
df = pd.merge(df,df3,how='outer',on='city')
```


```python
df.head()
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
      <th>city</th>
      <th>type</th>
      <th>driver_count</th>
      <th>fare</th>
      <th>ride_id</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Alvarezhaven</td>
      <td>Urban</td>
      <td>21</td>
      <td>23.928710</td>
      <td>31</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Alyssaberg</td>
      <td>Urban</td>
      <td>67</td>
      <td>20.609615</td>
      <td>26</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Anitamouth</td>
      <td>Suburban</td>
      <td>16</td>
      <td>37.315556</td>
      <td>9</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Antoniomouth</td>
      <td>Urban</td>
      <td>21</td>
      <td>23.625000</td>
      <td>22</td>
    </tr>
    <tr>
      <th>4</th>
      <td>Aprilchester</td>
      <td>Urban</td>
      <td>49</td>
      <td>21.981579</td>
      <td>19</td>
    </tr>
  </tbody>
</table>
</div>




```python
plt.scatter(
        x=df[df['type'] == 'Urban']['ride_id'],
        y=df[df['type'] == 'Urban']['fare'],
        c = '#FFD700',
        s = df[df['type'] == 'Urban']['driver_count']**1.5,
        alpha = 0.60,
        label = 'Urban',
        edgecolors="black",
        linewidths=0.75)

plt.scatter(
        x=df[df['type'] == 'Suburban']['ride_id'],
        y=df[df['type'] == 'Suburban']['fare'],
        c= '#87CEFA',
        s = df[df['type'] == 'Suburban']['driver_count']**1.5,
        alpha = 0.60,
        label = 'Suburban',
        edgecolors="black",
        linewidths=0.75)

plt.scatter(
        x=df[df['type'] == 'Rural']['ride_id'],
        y=df[df['type'] == 'Rural']['fare'],
        c= '#FF7F50',
        s = df[df['type'] == 'Rural']['driver_count']**1.5,
        alpha = 0.60,
        label = 'Rural',
        edgecolors="black",
        linewidths=0.75)

plt.legend( title="City type")
plt.xlabel("Total Number of rides (per city)")
plt.ylabel("Average Fare ($)")
plt.title("Pyber ride sharing data")
plt.annotate("Note: Circle size correlates with driver count per city",xy=(35, 45),xytext=(40, 45))
plt.show()
```


![png](output_9_0.png)



```python
# % of Total Fares by City Type
pie_fare = df.groupby('type').agg({'fare':np.sum}).reset_index().sort_values('type',ascending=False)
pie_fare
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
      <th>type</th>
      <th>fare</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>2</th>
      <td>Urban</td>
      <td>1623.863390</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Suburban</td>
      <td>1268.627391</td>
    </tr>
    <tr>
      <th>0</th>
      <td>Rural</td>
      <td>615.728572</td>
    </tr>
  </tbody>
</table>
</div>




```python
labels = pie_fare['type']
sizes = pie_fare['fare']
colors = ['#FFD700', '#87CEFA', '#FF7F50']
explode = (0, 0.05, 0.05) 
plt.pie(sizes, colors=colors,explode=explode, autopct='%1.1f%%',labels=labels,startangle=45,
       wedgeprops   = { 'linewidth' : 0.5,'edgecolor' : "black" },shadow=True,
       labeldistance=1.10)
plt.axis('equal')
plt.title("Total Fares by City Type")
plt.legend()
plt.show()
```


![png](output_11_0.png)



```python
# % of Total Rides by City Type
pie_rides = df.groupby('type').agg({'ride_id':np.sum}).reset_index().sort_values('type',ascending=False)
pie_rides
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
      <th>type</th>
      <th>ride_id</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>2</th>
      <td>Urban</td>
      <td>1625</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Suburban</td>
      <td>625</td>
    </tr>
    <tr>
      <th>0</th>
      <td>Rural</td>
      <td>125</td>
    </tr>
  </tbody>
</table>
</div>




```python
labels = pie_rides['type']
sizes = pie_rides['ride_id']
colors = ['#FFD700', '#87CEFA', '#FF7F50']
explode = (0, 0.05, 0.05) 
plt.pie(sizes, colors=colors,explode=explode, autopct='%1.1f%%',labels=labels,startangle=45,
       wedgeprops   = { 'linewidth' : 0.5,'edgecolor' : "black" },shadow=True,
       labeldistance=1.10)
plt.axis('equal')
plt.title("Total Rides by City Type")
plt.legend()
plt.show()
```


![png](output_13_0.png)



```python
# % of Total Drivers by City Type
pie_drivers = df.groupby('type').agg({'driver_count':np.sum}).reset_index().sort_values('type',ascending=False)
pie_drivers
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
      <th>type</th>
      <th>driver_count</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>2</th>
      <td>Urban</td>
      <td>2607</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Suburban</td>
      <td>638</td>
    </tr>
    <tr>
      <th>0</th>
      <td>Rural</td>
      <td>104</td>
    </tr>
  </tbody>
</table>
</div>




```python
labels = pie_drivers['type']
sizes = pie_drivers['driver_count']
colors = ['#FFD700', '#87CEFA', '#FF7F50']
explode = (0, 0.05, 0.05) 
plt.pie(sizes, colors=colors,explode=explode, autopct='%1.1f%%',labels=labels,startangle=45,
       wedgeprops   = { 'linewidth' : 0.5,'edgecolor' : "black" },shadow=True,
       labeldistance=1.10)
plt.axis('equal')
plt.title("Total Drivers by City Type")
plt.legend()
plt.show()
```


![png](output_15_0.png)



```python
#Observable trends
#One can clearly see that, on average, there is a high concentration of drivers in the urban city area compared to the the suburban and rural area.  With this info, we could introduce more public transportation options to city users, like "carpool", without significantly affecting the availability of our other services.

#Looking at the bubble chart, we can also identify a significant difference between the urban areas with lower costs per ride which seem to have fewer riders and those with higher costs per ride which typically have more users.  If we could investigate this further, we might be able to see differences that help us maximize the introduction of our services to cities in the future.

#Despite the low concentration of drivers(3.1%) and rides(5.3%) in the rural area, this area is generating 17.6% of the total fares.  If we can boost the availability of this service, whether through attracting more drivers OR using self-driving cars, we can significantly increase profitability.
```
