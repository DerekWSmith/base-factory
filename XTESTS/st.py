import turtle

# Function to draw a Sierpinski Triangle
def sierpinski(level, t):
    if level == 0:
        for _ in range(3):
            t.forward(100)
            t.left(120)
    else:
        sierpinski(level - 1, t)
        t.forward(100)
        sierpinski(level - 1, t)
        t.backward(100)
        t.left(60)
        t.forward(100)
        t.right(60)
        sierpinski(level - 1, t)
        t.left(60)
        t.backward(100)
        t.right(60)

# Create a turtle screen
screen = turtle.Screen()

# Create a turtle object
triangle_turtle = turtle.Turtle()

# Set the initial position of the turtle
triangle_turtle.penup()
triangle_turtle.goto(-50, -50)
triangle_turtle.pendown()

# Set the speed of the turtle
triangle_turtle.speed(0)  # Fastest speed

# Draw the Sierpinski Triangle
sierpinski(4, triangle_turtle)

# Close the turtle graphics window on click
screen.exitonclick()
