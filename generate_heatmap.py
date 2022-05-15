import plotly.express as px

# -2,2 | -1,2 | 0,2 | 1,2 | 2,2
# -2,1 | -1,1…

data = [
  [ 1, 1, 0, 1, 0 ],
  [ 2, 2, 1, 2, 0 ],
  [ 1, 4, 1, 4, 0 ],
  [ 5, 14, 7, 8, 0 ],
  [ 5, 6, 4, 5, 3 ]
]

fig = px.imshow(
     data,
     labels=dict(x="Orientation politique", y="Structure d'organisation", color="Nombre de participants"),
     x=['Très à gauche', 'Plutôt à gauche', 'Au centre', 'Plutôt à droite', 'Très à droite'],
     y=['Verticale, certainement', 'Plutôt verticale', 'Peu d\'importance', 'Plutôt horizontale', 'Horizontale, certainement'],
     text_auto=True
)
fig.write_html("index.html")