const data = {
helix: {
x: [57.692,59.822,61.952,64.082,66.212,68.343,70.473,72.603,74.733,76.863,78.993,81.124,83.254,85.384,87.514,89.644,91.775,93.905,96.035,98.165,100.295,102.425,104.556,106.686,108.816,110.946,113.076,115.207,117.337,119.467,121.597,123.727,125.857,127.988,130.118,132.248,134.378,136.508,138.639,140.769,142.899,145.029,147.159,149.289,151.42,153.55,155.68,157.81,159.94,162.07,164.201,166.331,168.461,170.591,172.721,174.852,176.982,179.112,181.242,183.372,185.502,187.633,189.763,191.893,194.023,196.153,198.284,200.414,202.544,204.674,206.804,208.934,211.065,213.195,215.325,217.455,219.585,221.716,223.846,225.976,228.106,230.236,232.366,234.497,236.627,238.757,240.887,243.017,245.147,247.278,249.408,251.538,253.668,255.798,257.929,260.059,262.189,264.319,266.449,268.579,270.71,272.84,274.97,277.1,279.23,281.361,283.491,285.621,287.751,289.881,292.011,294.142,296.272,298.402,300.532,302.662,304.792,306.923,309.053,311.183,313.313,315.443,317.574,319.704,321.834,323.964,326.094,328.224,330.355,332.485,334.615,336.745,338.875,341.006,343.136,345.266,347.396,349.526,351.656,353.787,355.917,358.047,360.177,362.307,364.438,366.568,368.698,370.828,372.958,375.088,377.219,379.349,381.479,383.609,385.739,387.869,390.0,392.13,394.26,396.39,398.52,400.651,402.781,404.911,407.041,409.171,411.301,413.432,415.562,417.692,419.822,421.952,424.083,426.213,428.343,430.473,432.603,434.733,436.864,438.994,441.124,443.254,445.384,447.515,449.645,451.775,453.905,456.035,458.165,460.296,462.426,464.556,466.686,468.816,470.946,473.077,475.207,477.337,479.467,481.597,483.728,485.858,487.988,490.118,492.248,494.378,496.509,498.639,500.769,502.899,505.029,507.16,509.29,511.42,513.55,515.68,517.81,519.941,522.071,524.201,526.331,528.461,530.592,532.722,534.852,536.982,539.112,541.242,543.373,545.503,547.633,549.763,551.893,554.023,556.154,558.284,560.414,562.544,564.674,566.805,568.935,571.065,573.195,575.325,577.455,579.586,581.716,583.846,585.976,588.106,590.237,592.367,594.497,596.627,598.757,600.887,603.018,605.148,607.278,609.408,611.538,613.669,615.799,617.929,620.059,622.189,624.319,626.45,628.58,630.71,632.84,634.97,637.1,639.231,641.361,643.491,645.621,647.751,649.882,652.012,654.142,656.272,658.402,660.532,662.663,664.793,666.923,669.053,671.183,673.314,675.444,677.574,679.704,681.834,683.964,686.095,688.225,690.355,692.485,694.615,696.746,698.876,701.006,703.136,705.266,707.396,709.527,711.657,713.787,715.917,718.047,720.177,722.308,724.438,726.568,728.698,730.828,732.959,735.089,737.219,739.349,741.479,743.609,745.74,747.87,750.0],
y: [57.692,64.369,70.956,77.365,83.51,89.308,94.681,99.556,103.869,107.562,110.584,112.895,114.464,115.27,115.303,114.561,113.054,110.804,107.84,104.201,99.938,95.107,89.773,84.008,77.889,71.498,64.922,58.249,51.569,44.97,38.543,32.373,26.544,21.132,16.213,11.851,8.105,5.025,2.653,1.021,0.151,0.054,0.732,2.175,4.364,7.27,10.854,15.068,19.854,25.149,30.881,36.973,43.344,49.908,56.576,63.26,69.868,76.313,82.508,88.369,93.818,98.781,103.192,106.991,110.128,112.56,114.255,115.189,115.351,114.738,113.358,111.229,108.382,104.853,100.69,95.949,90.694,84.995,78.93,72.579,66.028,59.364,52.679,46.061,39.599,33.38,27.488,22.002,16.996,12.536,8.684,5.49,2.998,1.241,0.242,0.016,0.565,1.882,3.949,6.738,10.212,14.324,19.019,24.234,29.898,35.936,42.267,48.804,55.462,62.149,68.776,75.254,81.496,87.419,92.941,97.99,102.498,106.403,109.653,112.205,114.025,115.087,115.378,114.894,113.64,111.635,108.905,105.486,101.425,96.776,91.602,85.973,79.963,73.653,67.13,60.479,53.791,47.155,40.661,34.396,28.444,22.885,17.794,13.239,9.282,5.975,3.363,1.481,0.355,0.0,0.42,1.61,3.553,6.224,9.587,13.597,18.199,23.331,28.926,34.907,41.195,47.704,54.347,61.036,67.679,74.189,80.476,86.457,92.052,97.185,101.787,105.796,109.159,111.83,113.774,114.963,115.383,115.028,113.902,112.02,109.409,106.102,102.144,97.59,92.498,86.939,80.987,74.722,68.228,61.592,54.904,48.254,41.73,35.421,29.411,23.781,18.607,13.958,9.897,6.479,3.748,1.743,0.49,0.005,0.296,1.358,3.178,5.73,8.98,12.886,17.393,22.442,27.965,33.887,40.129,46.607,53.235,59.922,66.579,73.117,79.447,85.485,91.15,96.364,101.059,105.172,108.646,111.435,113.502,114.818,115.367,115.141,114.143,112.385,109.893,106.699,102.847,98.388,93.381,87.895,82.003,75.785,69.323,62.704,56.019,49.356,42.805,36.454,30.388,24.69,19.435,14.694,10.531,7.002,4.154,2.026,0.646,0.032,0.194,1.128,2.823,5.255,8.392,12.191,16.602,21.566,27.014,32.875,39.07,45.515,52.124,58.807,65.475,72.039,78.41,84.503,90.235,95.53,100.316,104.529,108.113,111.019,113.209,114.652,115.329,115.232,114.362,112.73,110.358,107.279,103.533,99.171,94.251,88.84,83.01,76.84,70.413,63.815,57.134,50.461,43.885,37.495,31.376,25.611,20.277,15.445,11.182,7.544,4.58,2.329,0.823,0.081,0.113,0.919,2.489,4.8,7.822,11.514,15.827,20.703,26.076,31.873,38.018,44.427,51.015,57.692],
z: [115.384,114.996,113.838,111.926,109.284,105.95,101.966,97.388,92.276,86.699,80.732,74.456,67.954,61.314,54.626,47.979,41.462,35.164,29.168,23.556,18.402,13.777,9.742,6.351,3.65,1.676,0.454,0.002,0.325,1.419,3.27,5.852,9.13,13.062,17.593,22.663,28.204,34.141,40.395,46.881,53.513,60.2,66.854,73.385,79.705,85.729,91.376,96.571,101.243,105.329,108.776,111.535,113.572,114.857,115.373,115.115,114.084,112.296,109.774,106.552,102.673,98.19,93.162,87.657,81.75,75.52,69.049,62.427,55.74,49.08,42.535,36.195,30.143,24.461,19.226,14.508,10.371,6.869,4.051,1.953,0.605,0.024,0.218,1.184,2.91,5.372,8.537,12.363,16.799,21.783,27.251,33.127,39.334,45.788,52.401,59.086,65.752,72.309,78.67,84.749,90.465,95.74,100.503,104.691,108.248,111.125,113.284,114.695,115.341,115.212,114.309,112.646,110.244,107.136,103.363,98.976,94.035,88.605,82.759,76.577,70.141,63.537,56.855,50.184,43.614,37.234,31.128,25.379,20.065,15.256,11.018,7.407,4.471,2.251,0.777,0.067,0.131,0.97,2.57,4.912,7.963,11.682,16.019,20.917,26.309,32.123,38.28,44.699,51.292,57.971,64.646,71.227,77.627,83.759,89.541,94.894,99.748,104.036,107.701,110.694,112.975,114.513,115.287,115.287,114.513,112.975,110.694,107.701,104.036,99.748,94.894,89.541,83.759,77.627,71.227,64.646,57.971,51.292,44.699,38.28,32.123,26.309,20.917,16.019,11.682,7.963,4.912,2.57,0.97,0.131,0.067,0.777,2.251,4.471,7.407,11.018,15.256,20.065,25.379,31.128,37.234,43.614,50.184,56.855,63.537,70.141,76.577,82.759,88.605,94.035,98.976,103.363,107.136,110.244,112.646,114.309,115.212,115.341,114.695,113.284,111.125,108.248,104.691,100.503,95.74,90.465,84.749,78.67,72.309,65.752,59.086,52.401,45.788,39.334,33.127,27.251,21.783,16.799,12.363,8.537,5.372,2.91,1.184,0.218,0.024,0.605,1.953,4.051,6.869,10.371,14.508,19.226,24.461,30.143,36.195,42.535,49.08,55.74,62.427,69.049,75.52,81.75,87.657,93.162,98.19,102.673,106.552,109.774,112.296,114.084,115.115,115.373,114.857,113.572,111.535,108.776,105.329,101.243,96.571,91.376,85.729,79.705,73.385,66.854,60.2,53.513,46.881,40.395,34.141,28.204,22.663,17.593,13.062,9.13,5.852,3.27,1.419,0.325,0.002,0.454,1.676,3.65,6.351,9.742,13.777,18.402,23.556,29.168,35.164,41.462,47.979,54.626,61.314,67.954,74.456,80.732,86.699,92.276,97.388,101.966,105.95,109.284,111.926,113.838,114.996,115.384],
labels: ['1__Test','0__Test','1__Test','1__Test','0__Test','1__Test','0__Test','0__Test','0__Test','1__Test','1__Test','0__Test','1__Test','0__Test','1__Test','1__Test','0__Test','0__Test','1__Test','1__Test','1__Test','0__Test','0__Test','0__Test','0__Test','0__Test','0__Test','0__Test','1__Test','0__Test','1__Test','0__Test','1__Test','0__Test','1__Test','0__Test','1__Test','1__Test','0__Test','0__Test','0__Test','1__Test','1__Test','0__Test','0__Test','0__Test','0__Test','0__Test','0__Test','0__Test','0__Test','0__Test','1__Test','1__Test','1__Test','0__Test','0__Test','0__Test','1__Test','1__Test','1__Test','1__Test','1__Test','0__Test','1__Test','0__Test','1__Test','1__Test','1__Test','0__Test','0__Test','0__Test','0__Test','1__Test','1__Test','1__Test','0__Test','0__Test','1__Test','0__Test','0__Test','0__Test','0__Test','1__Test','0__Test','0__Test','1__Test','0__Test','0__Test','0__Test','0__Test','1__Test','1__Test','0__Test','0__Test','1__Test','0__Test','1__Test','1__Test','0__Test','1__Test','1__Test','0__Test','1__Test','1__Test','1__Test','1__Test','0__Test','1__Test','0__Test','0__Test','0__Test','1__Test','0__Test','1__Test','1__Test','0__Test','1__Test','0__Test','1__Test','0__Test','1__Test','0__Test','1__Test','0__Test','1__Test','1__Test','0__Test','0__Test','1__Test','0__Test','1__Test','1__Test','1__Test','1__Test','1__Test','1__Test','1__Test','1__Test','0__Test','1__Test','0__Test','1__Test','1__Test','0__Test','0__Test','1__Test','0__Test','1__Test','1__Test','0__Test','1__Test','1__Test','1__Test','0__Test','1__Test','1__Test','0__Test','0__Test','1__Test','0__Test','0__Test','0__Test','0__Test','0__Test','1__Test','0__Test','1__Test','1__Test','0__Test','1__Test','0__Test','0__Test','0__Test','0__Test','1__Test','1__Test','0__Test','1__Test','0__Test','0__Test','1__Test','0__Test','1__Test','0__Test','0__Test','0__Test','0__Test','0__Test','1__Test','0__Test','1__Test','0__Test','0__Test','0__Test','0__Test','0__Test','0__Test','0__Test','0__Test','1__Test','1__Test','0__Test','0__Test','0__Test','0__Test','0__Test','0__Test','0__Test','1__Test','1__Test','1__Test','1__Test','0__Test','0__Test','1__Test','1__Test','1__Test','1__Test','1__Test','0__Test','1__Test','0__Test','0__Test','0__Test','1__Test','0__Test','0__Test','1__Test','0__Test','1__Test','0__Test','0__Test','1__Test','1__Test','1__Test','1__Test','1__Test','1__Test','0__Test','0__Test','1__Test','0__Test','1__Test','1__Test','1__Test','0__Test','0__Test','0__Test','0__Test','0__Test','1__Test','0__Test','1__Test','0__Test','0__Test','1__Test','1__Test','0__Test','0__Test','1__Test','0__Test','0__Test','0__Test','0__Test','0__Test','0__Test','1__Test','0__Test','1__Test','0__Test','0__Test','0__Test','0__Test','0__Test','1__Test','0__Test','1__Test','1__Test','1__Test','0__Test','1__Test','0__Test','1__Test','1__Test','0__Test','1__Test','1__Test','1__Test','1__Test','0__Test','1__Test','1__Test','1__Test','0__Test','1__Test','0__Test','1__Test','1__Test','0__Test','0__Test','1__Test','1__Test','0__Test','1__Test','1__Test','1__Test','1__Test','0__Test','1__Test','1__Test','1__Test','0__Test','1__Test','0__Test','1__Test','0__Test','0__Test','0__Test','1__Test','1__Test','0__Test','1__Test','0__Test','1__Test','1__Test'],
colors: [
{
r: [217.0,27.0,217.0,217.0,27.0,217.0,27.0,27.0,27.0,217.0,217.0,27.0,217.0,27.0,217.0,217.0,27.0,27.0,217.0,217.0,217.0,27.0,27.0,27.0,27.0,27.0,27.0,27.0,217.0,27.0,217.0,27.0,217.0,27.0,217.0,27.0,217.0,217.0,27.0,27.0,27.0,217.0,217.0,27.0,27.0,27.0,27.0,27.0,27.0,27.0,27.0,27.0,217.0,217.0,217.0,27.0,27.0,27.0,217.0,217.0,217.0,217.0,217.0,27.0,217.0,27.0,217.0,217.0,217.0,27.0,27.0,27.0,27.0,217.0,217.0,217.0,27.0,27.0,217.0,27.0,27.0,27.0,27.0,217.0,27.0,27.0,217.0,27.0,27.0,27.0,27.0,217.0,217.0,27.0,27.0,217.0,27.0,217.0,217.0,27.0,217.0,217.0,27.0,217.0,217.0,217.0,217.0,27.0,217.0,27.0,27.0,27.0,217.0,27.0,217.0,217.0,27.0,217.0,27.0,217.0,27.0,217.0,27.0,217.0,27.0,217.0,217.0,27.0,27.0,217.0,27.0,217.0,217.0,217.0,217.0,217.0,217.0,217.0,217.0,27.0,217.0,27.0,217.0,217.0,27.0,27.0,217.0,27.0,217.0,217.0,27.0,217.0,217.0,217.0,27.0,217.0,217.0,27.0,27.0,217.0,27.0,27.0,27.0,27.0,27.0,217.0,27.0,217.0,217.0,27.0,217.0,27.0,27.0,27.0,27.0,217.0,217.0,27.0,217.0,27.0,27.0,217.0,27.0,217.0,27.0,27.0,27.0,27.0,27.0,217.0,27.0,217.0,27.0,27.0,27.0,27.0,27.0,27.0,27.0,27.0,217.0,217.0,27.0,27.0,27.0,27.0,27.0,27.0,27.0,217.0,217.0,217.0,217.0,27.0,27.0,217.0,217.0,217.0,217.0,217.0,27.0,217.0,27.0,27.0,27.0,217.0,27.0,27.0,217.0,27.0,217.0,27.0,27.0,217.0,217.0,217.0,217.0,217.0,217.0,27.0,27.0,217.0,27.0,217.0,217.0,217.0,27.0,27.0,27.0,27.0,27.0,217.0,27.0,217.0,27.0,27.0,217.0,217.0,27.0,27.0,217.0,27.0,27.0,27.0,27.0,27.0,27.0,217.0,27.0,217.0,27.0,27.0,27.0,27.0,27.0,217.0,27.0,217.0,217.0,217.0,27.0,217.0,27.0,217.0,217.0,27.0,217.0,217.0,217.0,217.0,27.0,217.0,217.0,217.0,27.0,217.0,27.0,217.0,217.0,27.0,27.0,217.0,217.0,27.0,217.0,217.0,217.0,217.0,27.0,217.0,217.0,217.0,27.0,217.0,27.0,217.0,27.0,27.0,27.0,217.0,217.0,27.0,217.0,27.0,217.0,217.0],
g: [95.0,158.0,95.0,95.0,158.0,95.0,158.0,158.0,158.0,95.0,95.0,158.0,95.0,158.0,95.0,95.0,158.0,158.0,95.0,95.0,95.0,158.0,158.0,158.0,158.0,158.0,158.0,158.0,95.0,158.0,95.0,158.0,95.0,158.0,95.0,158.0,95.0,95.0,158.0,158.0,158.0,95.0,95.0,158.0,158.0,158.0,158.0,158.0,158.0,158.0,158.0,158.0,95.0,95.0,95.0,158.0,158.0,158.0,95.0,95.0,95.0,95.0,95.0,158.0,95.0,158.0,95.0,95.0,95.0,158.0,158.0,158.0,158.0,95.0,95.0,95.0,158.0,158.0,95.0,158.0,158.0,158.0,158.0,95.0,158.0,158.0,95.0,158.0,158.0,158.0,158.0,95.0,95.0,158.0,158.0,95.0,158.0,95.0,95.0,158.0,95.0,95.0,158.0,95.0,95.0,95.0,95.0,158.0,95.0,158.0,158.0,158.0,95.0,158.0,95.0,95.0,158.0,95.0,158.0,95.0,158.0,95.0,158.0,95.0,158.0,95.0,95.0,158.0,158.0,95.0,158.0,95.0,95.0,95.0,95.0,95.0,95.0,95.0,95.0,158.0,95.0,158.0,95.0,95.0,158.0,158.0,95.0,158.0,95.0,95.0,158.0,95.0,95.0,95.0,158.0,95.0,95.0,158.0,158.0,95.0,158.0,158.0,158.0,158.0,158.0,95.0,158.0,95.0,95.0,158.0,95.0,158.0,158.0,158.0,158.0,95.0,95.0,158.0,95.0,158.0,158.0,95.0,158.0,95.0,158.0,158.0,158.0,158.0,158.0,95.0,158.0,95.0,158.0,158.0,158.0,158.0,158.0,158.0,158.0,158.0,95.0,95.0,158.0,158.0,158.0,158.0,158.0,158.0,158.0,95.0,95.0,95.0,95.0,158.0,158.0,95.0,95.0,95.0,95.0,95.0,158.0,95.0,158.0,158.0,158.0,95.0,158.0,158.0,95.0,158.0,95.0,158.0,158.0,95.0,95.0,95.0,95.0,95.0,95.0,158.0,158.0,95.0,158.0,95.0,95.0,95.0,158.0,158.0,158.0,158.0,158.0,95.0,158.0,95.0,158.0,158.0,95.0,95.0,158.0,158.0,95.0,158.0,158.0,158.0,158.0,158.0,158.0,95.0,158.0,95.0,158.0,158.0,158.0,158.0,158.0,95.0,158.0,95.0,95.0,95.0,158.0,95.0,158.0,95.0,95.0,158.0,95.0,95.0,95.0,95.0,158.0,95.0,95.0,95.0,158.0,95.0,158.0,95.0,95.0,158.0,158.0,95.0,95.0,158.0,95.0,95.0,95.0,95.0,158.0,95.0,95.0,95.0,158.0,95.0,158.0,95.0,158.0,158.0,158.0,95.0,95.0,158.0,95.0,158.0,95.0,95.0],
b: [2.0,119.0,2.0,2.0,119.0,2.0,119.0,119.0,119.0,2.0,2.0,119.0,2.0,119.0,2.0,2.0,119.0,119.0,2.0,2.0,2.0,119.0,119.0,119.0,119.0,119.0,119.0,119.0,2.0,119.0,2.0,119.0,2.0,119.0,2.0,119.0,2.0,2.0,119.0,119.0,119.0,2.0,2.0,119.0,119.0,119.0,119.0,119.0,119.0,119.0,119.0,119.0,2.0,2.0,2.0,119.0,119.0,119.0,2.0,2.0,2.0,2.0,2.0,119.0,2.0,119.0,2.0,2.0,2.0,119.0,119.0,119.0,119.0,2.0,2.0,2.0,119.0,119.0,2.0,119.0,119.0,119.0,119.0,2.0,119.0,119.0,2.0,119.0,119.0,119.0,119.0,2.0,2.0,119.0,119.0,2.0,119.0,2.0,2.0,119.0,2.0,2.0,119.0,2.0,2.0,2.0,2.0,119.0,2.0,119.0,119.0,119.0,2.0,119.0,2.0,2.0,119.0,2.0,119.0,2.0,119.0,2.0,119.0,2.0,119.0,2.0,2.0,119.0,119.0,2.0,119.0,2.0,2.0,2.0,2.0,2.0,2.0,2.0,2.0,119.0,2.0,119.0,2.0,2.0,119.0,119.0,2.0,119.0,2.0,2.0,119.0,2.0,2.0,2.0,119.0,2.0,2.0,119.0,119.0,2.0,119.0,119.0,119.0,119.0,119.0,2.0,119.0,2.0,2.0,119.0,2.0,119.0,119.0,119.0,119.0,2.0,2.0,119.0,2.0,119.0,119.0,2.0,119.0,2.0,119.0,119.0,119.0,119.0,119.0,2.0,119.0,2.0,119.0,119.0,119.0,119.0,119.0,119.0,119.0,119.0,2.0,2.0,119.0,119.0,119.0,119.0,119.0,119.0,119.0,2.0,2.0,2.0,2.0,119.0,119.0,2.0,2.0,2.0,2.0,2.0,119.0,2.0,119.0,119.0,119.0,2.0,119.0,119.0,2.0,119.0,2.0,119.0,119.0,2.0,2.0,2.0,2.0,2.0,2.0,119.0,119.0,2.0,119.0,2.0,2.0,2.0,119.0,119.0,119.0,119.0,119.0,2.0,119.0,2.0,119.0,119.0,2.0,2.0,119.0,119.0,2.0,119.0,119.0,119.0,119.0,119.0,119.0,2.0,119.0,2.0,119.0,119.0,119.0,119.0,119.0,2.0,119.0,2.0,2.0,2.0,119.0,2.0,119.0,2.0,2.0,119.0,2.0,2.0,2.0,2.0,119.0,2.0,2.0,2.0,119.0,2.0,119.0,2.0,2.0,119.0,119.0,2.0,2.0,119.0,2.0,2.0,2.0,2.0,119.0,2.0,2.0,2.0,119.0,2.0,119.0,2.0,119.0,119.0,119.0,2.0,2.0,119.0,2.0,119.0,2.0,2.0],
},
]},
helixtree: {
x: [59.822,61.952,68.343,72.603,70.473,74.733,72.603,76.863],
y: [64.369,70.956,89.308,99.556,94.681,103.869,99.556,107.562],
z: [114.996,113.838,105.95,97.388,101.966,92.276,97.388,86.699],
},
};
