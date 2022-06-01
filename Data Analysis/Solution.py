import pandas as pd 
from datetime import datetime ,date
import re



customers =pd.read_csv('Customer_Data_CSV.csv')
transaction =pd.read_csv('Transaction_Data_CSV.csv')

haltedPeriod=transaction.copy()
# Q1 deleting every row from transaction between 2020 and 2021

for i in haltedPeriod.index:
    if(haltedPeriod.loc[i,'Year']>2019 and haltedPeriod.loc[i,'Year']<2022 ):
        haltedPeriod.drop(i,inplace=True)
        
del i

# 2 converting date to numbers         
customers['Registered Date']=pd.to_datetime(customers['Registered Date'])
customers['Last Purchase']=pd.to_datetime(customers['Last Purchase'])

# 3 removing the accounts that didn't purchase more than 1 year
active_customers= customers.copy()
for i in active_customers.index:
    d1=customers['Last Purchase'][i] 
    d2=datetime(2019,12,31)
    delta = d2 - d1
    m=delta.days
    
    if m>364 :
        active_customers.drop(i,inplace=True)

    
del d1,d2,delta,i,m

Kuwait_Active=0
Qatar_Active=0
Bahrain_Active=0
Oman_Active=0
KSA_Active=0
UAE_Active=0
for i in active_customers.index:
    if(active_customers.loc[i,'Country of registration'] == 'Kuwait' ): 
        Kuwait_Active +=1
    if(active_customers.loc[i,'Country of registration'] == 'Qatar' ): 
        Qatar_Active +=1
    if(active_customers.loc[i,'Country of registration'] == 'Bahrain' ): 
        Bahrain_Active +=1
    if(active_customers.loc[i,'Country of registration'] == 'Oman' ): 
        Oman_Active +=1
    if(active_customers.loc[i,'Country of registration'] == 'KSA' ): 
        KSA_Active +=1
    if(active_customers.loc[i,'Country of registration'] == 'UAE' ): 
        UAE_Active +=1

del i

Countries=['Bahrain','KSA','Kuwait','Oman','Qatar','UAE']
numActive = [Bahrain_Active,KSA_Active,Kuwait_Active,Oman_Active,Qatar_Active,UAE_Active]

data={'Countries':Countries,'Active accounts number':numActive}
Total_Active= pd.DataFrame(data)
# Convert str numbers to INT numbers  

for i in haltedPeriod.index:
    haltedPeriod['New customer registrations'][i]=int(re.sub(",","",haltedPeriod['New customer registrations'][i]))
    haltedPeriod['Number of registered customers who made purchases'][i]=int(re.sub(",","",haltedPeriod['Number of registered customers who made purchases'][i]))
    haltedPeriod['Number of transactions made by registered customers'][i]=int(re.sub(",","",haltedPeriod['Number of transactions made by registered customers'][i]))
    haltedPeriod['Total spend by registered custoemrs'][i]=int(re.sub(",","",haltedPeriod['Total spend by registered custoemrs'][i]))
    haltedPeriod['Total spend by unidentified customers'][i]=int(re.sub(",","",haltedPeriod['Total spend by unidentified customers'][i]))
    haltedPeriod['Number of transactions by unidentified customers'][i]=int(re.sub(",","",haltedPeriod['Number of transactions by unidentified customers'][i]))
    
del i    

# Total Sums 
# Q2 + Q3 
totalRegisteredSum=sum(haltedPeriod['Total spend by registered custoemrs'])
totalUnidentifiedSum=sum(haltedPeriod['Total spend by unidentified customers'])

totalRegisteredTransaction = sum(haltedPeriod['Number of transactions made by registered customers'])
totalUnidentifiedTransaction = sum(haltedPeriod['Number of transactions by unidentified customers'])


avgRegisteredPerTransaction = totalRegisteredSum / totalRegisteredTransaction
avgUnidentifiedPerTransaction = totalUnidentifiedSum / totalUnidentifiedTransaction


# Convert Months from str to Numbers 
sorted_haltedPeriod=haltedPeriod.copy()
MONTHS= {'Jan':1,'Feb':2,'Mar':3,'Apr':4,'May':5,'Jun':6,'Jul':7,
         'Aug':8,'Sept':9,'Oct':10,'Nov':11,'Dec':12,}

sorted_haltedPeriod['Month']= sorted_haltedPeriod['Month'].map(MONTHS)
sorted_haltedPeriod=sorted_haltedPeriod.sort_values(by=['Year','Month'])

############################################################################
# Could take some info for Q3
# Q4
Total_New_Registrations_2016=0
Total_Registered_made_Transaction_2016=0
Total_Spend_2016 =0
Total_Transaction_made_Registered_2016=0
Total_Unregistered_Spend_2016=0
Total_Transaction_made_Unegistered_2016=0



Total_New_Registrations_2017=0
Total_Registered_made_Transaction_2017=0
Total_Spend_2017 =0
Total_Transaction_made_Registered_2017=0
Total_Unregistered_Spend_2017=0
Total_Transaction_made_Unegistered_2017=0


Total_New_Registrations_2018=0
Total_Registered_made_Transaction_2018=0
Total_Spend_2018 =0
Total_Transaction_made_Registered_2018=0
Total_Unregistered_Spend_2018=0
Total_Transaction_made_Unegistered_2018=0


Total_New_Registrations_2019=0
Total_Registered_made_Transaction_2019=0
Total_Spend_2019 =0
Total_Transaction_made_Registered_2019=0
Total_Unregistered_Spend_2019=0
Total_Transaction_made_Unegistered_2019=0

for i in sorted_haltedPeriod.index:
    if(sorted_haltedPeriod.loc[i,'Year'] == 2016 ):
        Total_New_Registrations_2016 = Total_New_Registrations_2016 +  sorted_haltedPeriod.loc[i,'New customer registrations']
        Total_Registered_made_Transaction_2016 = Total_Registered_made_Transaction_2016 +  sorted_haltedPeriod.loc[i,'Number of registered customers who made purchases']
        Total_Transaction_made_Registered_2016 = Total_Transaction_made_Registered_2016 +  sorted_haltedPeriod.loc[i,'Number of transactions made by registered customers']
        Total_Spend_2016 = Total_Spend_2016 +  sorted_haltedPeriod.loc[i,'Total spend by registered custoemrs']
        Total_Unregistered_Spend_2016 = Total_Unregistered_Spend_2016 +  sorted_haltedPeriod.loc[i,'Total spend by unidentified customers']
        Total_Transaction_made_Unegistered_2016 = Total_Transaction_made_Unegistered_2016 +  sorted_haltedPeriod.loc[i,'Number of transactions by unidentified customers']

    
    if(sorted_haltedPeriod.loc[i,'Year'] == 2017 ):
        Total_New_Registrations_2017 = Total_New_Registrations_2017 +  sorted_haltedPeriod.loc[i,'New customer registrations']
        Total_Transaction_made_Registered_2017 = Total_Transaction_made_Registered_2017 +  sorted_haltedPeriod.loc[i,'Number of transactions made by registered customers']
        Total_Registered_made_Transaction_2017 = Total_Registered_made_Transaction_2017 +  sorted_haltedPeriod.loc[i,'Number of registered customers who made purchases']
        Total_Spend_2017 = Total_Spend_2017 +  sorted_haltedPeriod.loc[i,'Total spend by registered custoemrs']
        Total_Unregistered_Spend_2017 = Total_Unregistered_Spend_2017 +  sorted_haltedPeriod.loc[i,'Total spend by unidentified customers']
        Total_Transaction_made_Unegistered_2017 = Total_Transaction_made_Unegistered_2017 +  sorted_haltedPeriod.loc[i,'Number of transactions by unidentified customers']

    
    if(sorted_haltedPeriod.loc[i,'Year'] == 2018 ):
        Total_New_Registrations_2018 = Total_New_Registrations_2018 +  sorted_haltedPeriod.loc[i,'New customer registrations']
        Total_Transaction_made_Registered_2018 = Total_Transaction_made_Registered_2018 +  sorted_haltedPeriod.loc[i,'Number of transactions made by registered customers']
        Total_Registered_made_Transaction_2018 = Total_Registered_made_Transaction_2018 +  sorted_haltedPeriod.loc[i,'Number of registered customers who made purchases']
        Total_Spend_2018 = Total_Spend_2018 +  sorted_haltedPeriod.loc[i,'Total spend by registered custoemrs']
        Total_Unregistered_Spend_2018 = Total_Unregistered_Spend_2018 +  sorted_haltedPeriod.loc[i,'Total spend by unidentified customers']
        Total_Transaction_made_Unegistered_2018 = Total_Transaction_made_Unegistered_2018 +  sorted_haltedPeriod.loc[i,'Number of transactions by unidentified customers']

    
    if(sorted_haltedPeriod.loc[i,'Year'] == 2019 ):
        Total_New_Registrations_2019 = Total_New_Registrations_2019 +  sorted_haltedPeriod.loc[i,'New customer registrations']
        Total_Transaction_made_Registered_2019 = Total_Transaction_made_Registered_2019 +  sorted_haltedPeriod.loc[i,'Number of transactions made by registered customers']
        Total_Registered_made_Transaction_2019 = Total_Registered_made_Transaction_2019 +  sorted_haltedPeriod.loc[i,'Number of registered customers who made purchases']
        Total_Spend_2019 = Total_Spend_2019 +  sorted_haltedPeriod.loc[i,'Total spend by registered custoemrs']
        Total_Unregistered_Spend_2019 = Total_Unregistered_Spend_2019 +  sorted_haltedPeriod.loc[i,'Total spend by unidentified customers']
        Total_Transaction_made_Unegistered_2019 = Total_Transaction_made_Unegistered_2019 +  sorted_haltedPeriod.loc[i,'Number of transactions by unidentified customers']


del i

Years=[]

for i in sorted_haltedPeriod.index :
    if(sorted_haltedPeriod.loc[i,'Year'] not in Years ): 
        Years.append(sorted_haltedPeriod.loc[i,'Year'])
del i

Total_Spend=[Total_Spend_2016 ,Total_Spend_2017,Total_Spend_2018,Total_Spend_2019]
Total_new_Registrations=[Total_New_Registrations_2016,Total_New_Registrations_2017,Total_New_Registrations_2018,Total_New_Registrations_2019]
Total_Registered_made_Transaction=[Total_Registered_made_Transaction_2016,Total_Registered_made_Transaction_2017,Total_Registered_made_Transaction_2018,Total_Registered_made_Transaction_2019]
Total_Transaction_made_Registered=[Total_Transaction_made_Registered_2016,Total_Transaction_made_Registered_2017,Total_Transaction_made_Registered_2018,Total_Transaction_made_Registered_2019]
Total_Spend_Unidentified =[Total_Unregistered_Spend_2016,Total_Unregistered_Spend_2017,Total_Unregistered_Spend_2018,Total_Unregistered_Spend_2019]
Total_Transaction_made_Unidentified = [Total_Transaction_made_Unegistered_2016,Total_Transaction_made_Unegistered_2017,Total_Transaction_made_Unegistered_2018,Total_Transaction_made_Unegistered_2019]



data1={'Year': Years , 'Total Spend':Total_Spend}
data2={'Year': Years , 'Total New customer registrations':Total_new_Registrations}
data3={'Year': Years , 'Total Number of registered customers who made purchases':Total_Registered_made_Transaction}
data4={'Year': Years , 'Total Number of transactions made by registered customers':Total_Transaction_made_Registered}
data5={'Year': Years , 'Total spend by unidentified customers':Total_Spend_Unidentified}
data6={'Year': Years , 'Number of transactions by unidentified customers':Total_Transaction_made_Unidentified}

Spend_Over_Years = pd.DataFrame(data1)
New_Registrations_Over_Years = pd.DataFrame(data2)
Registered_made_Transaction_Over_Years = pd.DataFrame(data3)
Transaction_made_Registered_Over_Years = pd.DataFrame(data4)
unidentified_made_Transaction_Over_Years = pd.DataFrame(data5)#need to change the name of this variable 
Transaction_made_unidentified_Over_Years = pd.DataFrame(data6)

###########################################################
# Q4 Growth rates 

def cgar (start_value , end_value, num_periods):
    return ( end_value / start_value) ** (1/ (num_periods - 1 )) - 1 




start_value = Spend_Over_Years['Total Spend'][0]
end_value = Spend_Over_Years['Total Spend'][len(Spend_Over_Years)-1]
num_periods =len(Spend_Over_Years)


Spend_growth_over_years = cgar(start_value,end_value,num_periods)*100

# ----------------------------------
start_value = New_Registrations_Over_Years['Total New customer registrations'][0]
end_value = New_Registrations_Over_Years['Total New customer registrations'][len(Spend_Over_Years)-1]
num_periods =len(New_Registrations_Over_Years)


New_Customers_growth_over_years = cgar(start_value,end_value,num_periods)*100
# ----------------------------------
start_value = Registered_made_Transaction_Over_Years['Total Number of registered customers who made purchases'][0]
end_value = Registered_made_Transaction_Over_Years['Total Number of registered customers who made purchases'][len(Spend_Over_Years)-1]
num_periods =len(Registered_made_Transaction_Over_Years)


Customers_made_Purchase_growth_over_years = cgar(start_value,end_value,num_periods)*100
# ----------------------------------
start_value = Transaction_made_Registered_Over_Years['Total Number of transactions made by registered customers'][0]
end_value = Transaction_made_Registered_Over_Years['Total Number of transactions made by registered customers'][len(Spend_Over_Years)-1]
num_periods =len(Transaction_made_Registered_Over_Years)


Transaction_by_registered_growth_over_years = cgar(start_value,end_value,num_periods)*100
# ----------------------------------
# ----------------------------------
# ----------------------------------

start_value = unidentified_made_Transaction_Over_Years['Total spend by unidentified customers'][0]
end_value = unidentified_made_Transaction_Over_Years['Total spend by unidentified customers'][len(unidentified_made_Transaction_Over_Years)-1]
num_periods =len(unidentified_made_Transaction_Over_Years)


Spend_by_unidentified_growth_over_years = cgar(start_value,end_value,num_periods)*100
# ----------------------------------
start_value = Transaction_made_unidentified_Over_Years['Number of transactions by unidentified customers'][0]
end_value = Transaction_made_unidentified_Over_Years['Number of transactions by unidentified customers'][len(Transaction_made_unidentified_Over_Years)-1]
num_periods =len(Transaction_made_unidentified_Over_Years)


Transaction_by_unidentified_growth_over_years = cgar(start_value,end_value,num_periods)*100

###########################################################
# Q5

# Years
data_Years={'Year': Years ,
       'Total spend by registered custoemrs':Total_Spend,
       'Total spend by unidentified customers':Total_Spend_Unidentified,
       'Number of transactions made by registered customers':Total_Transaction_made_Registered,
       'Number of transactions by unidentified customers':Total_Transaction_made_Unidentified}

Transaction_Spend_DataFrame = pd.DataFrame(data_Years)


# TOTAL 
Registered_Spend_Percent = totalRegisteredSum /(totalRegisteredSum+totalUnidentifiedSum)
Unidentifie_Spend_Percent = 1-Registered_Spend_Percent

Registered_Transaction_Percent = totalRegisteredTransaction /(totalRegisteredTransaction+totalUnidentifiedTransaction)
Unidentifie_Transaction_Percent = 1-Registered_Transaction_Percent


# Every Year 

Registered_Spend_Percent_2016=Total_Spend_2016 / (Total_Spend_2016+Total_Unregistered_Spend_2016)
Registered_Spend_Percent_2017=Total_Spend_2017 / (Total_Spend_2017+Total_Unregistered_Spend_2017)
Registered_Spend_Percent_2018=Total_Spend_2018 / (Total_Spend_2018+Total_Unregistered_Spend_2018)
Registered_Spend_Percent_2019=Total_Spend_2019 / (Total_Spend_2019+Total_Unregistered_Spend_2019)

Unidentifie_Spend_Percent_2016 =  1-Registered_Spend_Percent_2016 
Unidentifie_Spend_Percent_2017 =  1-Registered_Spend_Percent_2017 
Unidentifie_Spend_Percent_2018 =  1-Registered_Spend_Percent_2018  
Unidentifie_Spend_Percent_20119 = 1-Registered_Spend_Percent_2019  

##############################################



Registered_Transaction_Percent_2016= Total_Transaction_made_Registered_2016 /(Total_Transaction_made_Registered_2016+Total_Transaction_made_Unegistered_2016)
Registered_Transaction_Percent_2017= Total_Transaction_made_Registered_2017 /(Total_Transaction_made_Registered_2017+Total_Transaction_made_Unegistered_2017)
Registered_Transaction_Percent_2018= Total_Transaction_made_Registered_2018 /(Total_Transaction_made_Registered_2018+Total_Transaction_made_Unegistered_2018)
Registered_Transaction_Percent_2019= Total_Transaction_made_Registered_2019 /(Total_Transaction_made_Registered_2019+Total_Transaction_made_Unegistered_2019)

Unidentifie_Transaction_Percent_2016 = 1-Registered_Transaction_Percent_2016 
Unidentifie_Transaction_Percent_2017 = 1-Registered_Transaction_Percent_2017
Unidentifie_Transaction_Percent_2018 = 1-Registered_Transaction_Percent_2018
Unidentifie_Transaction_Percent_20119 = 1-Registered_Transaction_Percent_2019  

##############################################
Country_sorted = sorted_haltedPeriod.copy()
Country_sorted=Country_sorted.sort_values(by=['Country','Year','Month'])

Data_Bahrain= pd.read_csv(R'C:\Users\Dell\Desktop\ec\Exercise\CountryData\Bahrain.csv')
Data_KSA= pd.read_csv(R'C:\Users\Dell\Desktop\ec\Exercise\CountryData\KSA.csv')
Data_Kuwait= pd.read_csv(R'C:\Users\Dell\Desktop\ec\Exercise\CountryData\Kuwait.csv')
Data_Oman= pd.read_csv(R'C:\Users\Dell\Desktop\ec\Exercise\CountryData\Oman.csv')
Data_Qatar= pd.read_csv(R'C:\Users\Dell\Desktop\ec\Exercise\CountryData\Qatar.csv')
Data_UAE= pd.read_csv(R'C:\Users\Dell\Desktop\ec\Exercise\CountryData\UAE.csv')





