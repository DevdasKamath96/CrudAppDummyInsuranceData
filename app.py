from flask import Flask, render_template,request
import sqlite3
from flask_sqlalchemy import SQLAlchemy





app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///insurance_data.db'
db = SQLAlchemy(app)

month_dict = {'01':'January','02':'Febraury','03':'March','04':'April','05':'May','06':'June','07':'July',\
    '08':'August','09':'September','10':'October','11':'November','12':'December'}






class Insurance(db.Model):
    ProjectID = db.Column(db.Integer, primary_key=True)
    DOP = db.Column(db.DateTime, nullable=False)
    CustomerID = db.Column(db.Integer, nullable=False)
    Fuel = db.Column(db.String(30), nullable=False)
    VehicleSegment = db.Column(db.String(5), nullable=False)
    Premium = db.Column(db.Integer, nullable=False)
    BIL = db.Column(db.Boolean, nullable=False)
    PIP = db.Column(db.Boolean, nullable=False)
    PDP = db.Column(db.Boolean, nullable=False)
    Collision = db.Column(db.Boolean, nullable=False)
    Comprehensive = db.Column(db.Boolean, nullable=False)
    Gender = db.Column(db.String(20), nullable=False)
    IncomeGroup = db.Column(db.String(50), nullable=False)
    Region = db.Column(db.String(20), nullable=False)
    MaritalStatus = db.Column(db.Boolean, nullable=False)


    def __repr__(self):
        return 'Project ID: %r, Customer ID:%r Premium:%r' % (self.ProjectID, self.CustomerID, self.Premium)





@app.route("/")
def home():
    data = Insurance.query.all()
    return render_template('index.html',data=data)

@app.route('/api/update_data', methods=['POST'])
def update_data():
    Insurance_data = request.get_json(force=True)
    data_to_update = Insurance.query.get_or_404(Insurance_data.get('ProjectID', None))
    data_to_update.CustomerID = Insurance_data.get('CustomerID', None)
    data_to_update.Fuel = Insurance_data.get('Fuel', None)
    data_to_update.VehicleSegment = Insurance_data.get('VehicleSegment', None)
    data_to_update.Premium = Insurance_data.get('Premium', None)
    data_to_update.BIL = Insurance_data.get('BIL', None)
    data_to_update.PIP = Insurance_data.get('PIP', None)
    data_to_update.PDP = Insurance_data.get('PDP', None)
    data_to_update.Collision = Insurance_data.get('Collision', None)
    data_to_update.Comprehensive = Insurance_data.get('Comprehensive', None)
    data_to_update.Gender = Insurance_data.get('Gender', None)
    data_to_update.IncomeGroup = Insurance_data.get('IncomeGroup', None)
    data_to_update.Region = Insurance_data.get('Region', None)
    data_to_update.MaritalStatus = Insurance_data.get('MaritalStatus', None)
    db.session.commit()
    ret = {'status': Insurance_data.get('ProjectID', None)+" updated"}
    return ret, 200

@app.route('/api/visual',methods=['POST'])
def visual():
    if request.method=='POST':
        req = request.get_json(force=True)
        region = req.get('region',None)
        conn = sqlite3.connect('insurance_data.db')
        cur = conn.cursor()
        if region == 'All':
            cur.execute("SELECT COUNT(*),strftime('%m',DOP)\
                FROM Insurance WHERE strftime('%Y',DOP) = '2018' GROUP BY  strftime('%m',DOP)")
        else:
            cur.execute("SELECT COUNT(*),strftime('%m',DOP)\
                FROM Insurance WHERE strftime('%Y',DOP) = '2018' AND Region=? GROUP BY  strftime('%m',DOP)",(region,))
        
        count = []
        month = []
        for i in cur.fetchall():
            count.append(i[0])
            month.append(month_dict[i[1]])

        ret = {'count': count, 'month': month}
        return ret, 200

if __name__==("__main__"):
    app.run(debug=True)