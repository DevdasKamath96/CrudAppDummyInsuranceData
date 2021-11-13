import sqlite3
import pandas as pd
# from app import *
from datetime import datetime


# insert_command = '''INSERT INTO Insurance (ProjectID,DOP,CustomerID,Fuel,VehicleSegment,Premium,BIL,PIP,PDP,\
#     Collision,Comprehensive,Gender,IncomeGroup,Region,MaritalStatus) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)'''

# conn = sqlite3.connect("insurance_data.db")
# cur = conn.cursor()



df = pd.read_csv('Data Set - Insurance Client.csv')
print(type(df['Date of Purchase'][0]))
df['Date of Purchase'] = df['Date of Purchase'].apply(lambda x: datetime.strptime(x,"%m/%d/%Y").date())
print(type(df['Date of Purchase'][0]))
print(df['Date of Purchase'])

# for row in df.itertuples():
#     data = Insurance(ProjectID=row[1],\
#         DOP=row[2],CustomerID=row[3],Fuel=row[4],VehicleSegment=row[5],\
#             Premium=row[6],BIL=row[7],PIP=row[8],PDP=row[9],Collision=row[10],Comprehensive=row[11],\
#                 Gender=row[12],IncomeGroup=row[13],Region=row[14],MaritalStatus=row[15])

#     db.session.add(data)
#     db.session.commit()
    

# conn.commit()
# conn.close()



